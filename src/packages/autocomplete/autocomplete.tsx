import {
  useEffect,
  useRef,
  useState,
  useCallback,
  InputHTMLAttributes,
  ReactNode,
} from 'react';

interface AutocompleteProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  suggestions: Array<string>;
  value: string;
  setValue: (value?: string | unknown) => void;
  notFound?: string | ReactNode;
}

const style = {
  container: `relative mb-6 mt-3`,
  default: `rounded-lg w-full flex-1 mt-1 py-1.5 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:border-transparent border border-gray-300`,
  disabled: `cursor-not-allowed`,
  label: `text-gray-700`,
  suggestion: {
    list: `shadow-xl absolute top-full left-0 right-0 border w-auto md:max-w-full overflow-y-auto max-h-80 mt-2 bg-white p-3 z-20`,
    item: `px-4 py-3 focus text-sm text-gray-700 cursor-pointer hover:bg-gray-200`,
    activeItem: 'bg-gray-300',
  },
};

const Autocomplete = ({
  name,
  label,
  suggestions,
  value,
  setValue,
  notFound,
  ...rest
}: AutocompleteProps) => {
  const [activeSuggestion, setActiveSuggestion] = useState(0);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!ref.current?.contains(event.target)) {
        if (!showSuggestions) return;
        setShowSuggestions(false);
      }
    };
    window.addEventListener('click', handleOutsideClick);
    return () => window.removeEventListener('click', handleOutsideClick);
  }, [showSuggestions, ref]);

  const handleChange = useCallback(
    (e) => {
      const userInput = e.currentTarget.value;
      const filteredSuggestions = suggestions.filter(
        (suggestion) =>
          suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1,
      );
      setActiveSuggestion(0);
      setFilteredSuggestions(filteredSuggestions);
      setShowSuggestions(true);
      setValue(e.currentTarget.value);
    },
    [setValue, suggestions],
  );

  const onClick = (e) => {
    setActiveSuggestion(0);
    setFilteredSuggestions([]);
    setShowSuggestions(false);
    setValue(e.currentTarget.innerText);
  };

  const onKeyDown = (e) => {
    // User pressed the enter key
    if (e.keyCode === 13) {
      setActiveSuggestion(0);
      setShowSuggestions(false);
      setValue(filteredSuggestions[activeSuggestion]);
    }
    // User pressed the up arrow
    else if (e.keyCode === 38) {
      if (activeSuggestion === 0) {
        return;
      }
      setActiveSuggestion(activeSuggestion - 1);
    }
    // User pressed the down arrow
    else if (e.keyCode === 40) {
      if (activeSuggestion === filteredSuggestions.length - 1) {
        return;
      }
      setActiveSuggestion(activeSuggestion + 1);
    }
  };

  let suggestionsListComponent;

  if (showSuggestions && value) {
    if (filteredSuggestions.length) {
      suggestionsListComponent = (
        <ul className={style.suggestion.list}>
          {filteredSuggestions.map((suggestion, index) => {
            let className;
            if (index === activeSuggestion) {
              className = `${style.suggestion.item} ${style.suggestion.activeItem}`;
            }
            if (index !== activeSuggestion) {
              className = style.suggestion.item;
            }
            return (
              <li className={className} key={suggestion} onClick={onClick}>
                {suggestion}
              </li>
            );
          })}
        </ul>
      );
    } else {
      suggestionsListComponent = (
        <div className="mt-4 text-gray-700 text-sm">
          <em>{notFound}</em>
        </div>
      );
    }
  }

  return (
    <div className={style.container}>
      <label htmlFor={name} className={style.label}>
        {label}
      </label>
      <input
        autoComplete="off"
        className={style.default}
        onChange={handleChange}
        onKeyDown={onKeyDown}
        value={value}
        {...rest}
      />
      {suggestionsListComponent}
    </div>
  );
};

export default Autocomplete;
