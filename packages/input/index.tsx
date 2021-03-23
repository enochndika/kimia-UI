import { ForwardedRef, forwardRef, InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  dot?: boolean;
  error?: boolean;
  errorMessage?: string;
  label: string;
  name: string;
}

type InputRef = ForwardedRef<HTMLInputElement>;

/* All classes*/
const classes = {
  default: `rounded-lg flex-1 appearance-none w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base `,
  focusBorder: `focus:outline-none focus:ring-2 focus:border-transparent border border-gray-300 border-transparent`,
  error: 'ring-red-500 ring-2',
  errorMessage: `text-sm text-red-500 mb-6`,
};

/* Input props*/
/*
 * dot: (boolean) if true, a dot will be displayed on the side of the label to indicate a required field
 * error: (boolean) if true input is not valid and false input is valid
 * errorMessage : (string) will display an error when input is not valid
 * label: HTML label
 * name : HTML name
 * placeholder: HTML input placeholder
 * ...rest : pass all other default props for input element
 *
 * */
const Input = forwardRef(
  (
    { dot, error, errorMessage, label, name, placeholder, ...rest }: InputProps,
    ref: InputRef,
  ) => (
    <div className="relative mb-6">
      <label htmlFor={name} className="text-gray-700">
        {label}
        {dot && <span className="text-red-500 pl-0.5">*</span>}
      </label>
      <input
        {...rest}
        ref={ref}
        name={name}
        placeholder={placeholder}
        className={` ${error && classes.error} 
          ${classes.default} ${classes.focusBorder} `}
      />
      {error && (
        <>
          <ErrorIcon />
          <p className={classes.errorMessage}>{errorMessage}</p>
        </>
      )}
    </div>
  ),
);

/* Error Icon*/
const ErrorIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="15"
    height="15"
    fill="currentColor"
    className="absolute text-red-500 right-2 -mt-7"
    viewBox="0 0 1792 1792"
  >
    <path d="M1024 1375v-190q0-14-9.5-23.5t-22.5-9.5h-192q-13 0-22.5 9.5t-9.5 23.5v190q0 14 9.5 23.5t22.5 9.5h192q13 0 22.5-9.5t9.5-23.5zm-2-374l18-459q0-12-10-19-13-11-24-11h-220q-11 0-24 11-10 7-10 21l17 457q0 10 10 16.5t24 6.5h185q14 0 23.5-6.5t10.5-16.5zm-14-934l768 1408q35 63-2 126-17 29-46.5 46t-63.5 17h-1536q-34 0-63.5-17t-46.5-46q-37-63-2-126l768-1408q17-31 47-49t65-18 65 18 47 49z" />
  </svg>
);

export default Input;
