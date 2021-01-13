import React, { ForwardedRef, forwardRef, ReactNode } from "react";

interface BtnPropsWithChildren {}

export interface BtnProps
  extends React.HTMLAttributes<HTMLElement>,
    BtnPropsWithChildren {
  block?: boolean;
  children: ReactNode;
  className?: string;
  color?: "primary" | "success" | "danger" | "warning" | "indigo" | "dark";
  disabled?: boolean;
  outline?: boolean;
  rounded?: boolean;
  size?: "sm" | "md" | "lg";
  submit?: boolean;
}

type ButtonRef = ForwardedRef<HTMLButtonElement>;

const colors = (rounded: boolean) => ({
  primary: `${
    rounded
      ? "border-blue-700 border-2 text-blue-700 active:bg-blue-700 active:text-white"
      : "bg-blue-700 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:ring-offset-blue-200"
  } `,

  success: `${
    rounded
      ? "border-green-700 border-2 text-green-700 active:bg-green-700 active:text-white"
      : "bg-green-700 focus:ring-2 focus:ring-offset-2 focus:ring-green-700 focus:ring-offset-green-200"
  }`,

  danger: `${
    rounded
      ? "border-red-600 border-2 text-red-600 active:bg-red-600 active:text-white"
      : "bg-red-600 focus:ring-2 focus:ring-offset-2 focus:ring-red-600 focus:ring-offset-red-200"
  } `,

  dark: `${
    rounded
      ? "border-black border-2 text-gray-900 active:bg-black active:text-white"
      : "bg-black focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 focus:ring-offset-gray-200"
  } `,

  warning: `${
    rounded
      ? "border-yellow-500 border-2 text-yellow-500 active:bg-yellow-500 active:text-white"
      : "bg-yellow-500 focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 focus:ring-offset-yellow-200"
  } `,

  indigo: `${
    rounded
      ? "border-indigo-900 border-2 text-indigo-900 active:bg-indigo-900 active:text-white"
      : "bg-indigo-900 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-900 focus:ring-offset-indigo-200"
  } `,
});

const sizes = {
  sm: "px-6 py-1 text-sm",
  md: "px-6 py-2",
  lg: "px-6 py-3 text-lg",
};

export const Button = forwardRef(
  (
    {
      block,
      children,
      className,
      color,
      disabled,
      outline,
      rounded,
      size,
      submit,
      ...props
    }: BtnProps,
    ref: ButtonRef
  ) => {
    return (
      <button
        ref={ref}
        {...props}
        type={submit ? "submit" : "button"}
        disabled={disabled}
        className={`${block ? "flex justify-center w-full" : ""} ${
          disabled ? "opacity-60 cursor-not-allowed" : ""
        } ${color ? colors(outline)[color] : colors(outline).dark} ${
          size ? sizes[size] : sizes.md
        }  ${
          rounded ? "rounded-full" : "rounded"
        } ${block} ${className} text-white focus:outline-none shadow font-medium transition ease-in duration-200`}
      >
        {children}
      </button>
    );
  }
);
