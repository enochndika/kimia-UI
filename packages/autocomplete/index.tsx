import {
  useEffect,
  useRef,
  useState,
  useCallback,
  InputHTMLAttributes,
} from 'react';

interface AutocompleteProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  options: Array<string>;
  value: string;
  setValue: (value?: string | unknown) => void;
}

const style = {
  container: `relative mb-6 mt-3`,
  default: `rounded-lg w-full flex-1 mt-1 py-1.5 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:border-transparent border border-gray-300 border-transparent`,
  disabled: `cursor-not-allowed`,
  label: `text-gray-700`,
  option: {
    list: `shadow-xl absolute top-full focus:outline-none left-0 right-0 border w-auto md:max-w-xs overflow-y-auto max-h-80 mt-4 bg-white p-3 z-20`,
    item: `px-4 py-3 focus text-sm text-gray-700 cursor-pointer hover:bg-gray-100`,
  },
};

const Autocomplete = ({
  label,
  name,
  options,
  value,
  setValue,
  ...rest
}: AutocompleteProps) => {
  const [activeOption, setActiveOption] = useState(0);
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [showOptions, setShowOptions] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!ref.current?.contains(event.target)) {
        if (!showOptions) return;
        setShowOptions(false);
      }
    };
    window.addEventListener('click', handleOutsideClick);
    return () => window.removeEventListener('click', handleOutsideClick);
  }, [showOptions, ref]);

  const handleChange = useCallback(
    (e) => {
      const userInput = e.currentTarget.value;
      const changedFilteredOptions =
        options &&
        options.filter(
          (item) => item.toLowerCase().indexOf(userInput.toLowerCase()) > -1,
        );
      setActiveOption(0);
      setFilteredOptions(changedFilteredOptions);
      setValue(e.currentTarget.value);
      setShowOptions(true);
    },
    [value],
  );

  const onClick = (e) => {
    setActiveOption(0);
    setFilteredOptions([]);
    setValue(e.currentTarget.innerText);
    setShowOptions(false);
  };

  const onKeyDown = (e) => () => {
    if (e.keyCode === 13) {
      setActiveOption(0);
      setValue(filteredOptions[activeOption]);
      setShowOptions(false);
    } else if (e.keyCode === 38) {
      if (activeOption === 0) {
        return;
      }
      setActiveOption((prevState) => prevState - 1);
    } else if (e.keyCode === 40) {
      if (activeOption === filteredOptions.length - 1) {
        return;
      }
      setActiveOption((prevState) => prevState + 1);
    }
  };

  let optionList;
  if (showOptions && value) {
    if (filteredOptions && filteredOptions.length !== 0) {
      optionList = (
        <ul className={style.option.list}>
          {filteredOptions.map((item) => (
            <li
              role="link"
              tabIndex={0}
              className={style.option.item}
              key={item}
              onClick={onClick}
            >
              {item}
            </li>
          ))}
        </ul>
      );
    } else {
      optionList = (
        <div ref={ref} className="mt-4 text-gray-700 text-sm">
          <em>No results found</em>
        </div>
      );
    }
  }

  return (
    <>
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
        {optionList}
      </div>
    </>
  );
};

export default Autocomplete;
