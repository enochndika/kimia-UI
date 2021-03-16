import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface PriceGroupProps extends Props {
  title: string;
  titleBackground: string;
}

interface PriceItemProps extends Props {
  className?: string;
}
export const Price = ({ children }: Props) => (
  <div className="flex flex-wrap mb-6">{children}</div>
);

Price.Group = ({ children, title, titleBackground }: PriceGroupProps) => (
  <div className="w-full md:w-4/12 p-2 md:mb-0">
    <ul className="border border-solid border-gray-400 m-0 p-0 transition-all duration-300 ease-linear">
      <li
        className={`${titleBackground} text-2xl text-center p-5 border-b border-gray-300 text-white`}
      >
        {title}
      </li>
      {children}
    </ul>
  </div>
);

Price.Item = ({ children, className }: PriceItemProps) => (
  <div
    role="link"
    tabIndex={0}
    className={`${className} flex justify-center p-5 border-b border-gray-100  text-sm`}
  >
    {children}
  </div>
);

export const CheckIcon = () => (
  <svg
    fill="#007E33"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="18px"
    height="18px"
  >
    <path
      fill="none"
      stroke="#007E33"
      strokeMiterlimit="10"
      strokeWidth="2"
      d="M21 6L9 18 4 13"
    />
  </svg>
);

export const CloseIcon = () => (
  <div className="text-3xl -mt-2.5 text-red-600">&times;</div>
);
