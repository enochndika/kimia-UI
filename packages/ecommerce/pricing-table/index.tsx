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

const style = {
  price: `flex flex-wrap mb-6`,
  group: {
    container: `w-full md:w-4/12 p-2 mb-6`,
    list: `border border-solid border-gray-400 m-0 p-0 transition-all duration-300 ease-linear`,
    item: `text-2xl text-center p-5 border-b border-gray-300 text-white`,
  },
  item: `flex justify-center p-5 border-b border-gray-100 text-sm`,
};

const Price = ({ children }: Props) => (
  <div className={style.price}>{children}</div>
);

Price.Group = ({ children, title, titleBackground }: PriceGroupProps) => (
  <div className={style.group.container}>
    <ul className={style.group.list}>
      <li className={`${titleBackground} ${style.group.item}`}>{title}</li>
      {children}
    </ul>
  </div>
);

Price.Item = ({ children, className }: PriceItemProps) => (
  <div role="link" tabIndex={0} className={`${className} ${style.item}`}>
    {children}
  </div>
);

export default Price;

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
  <div className="-mt-2.5 text-red-600 text-3xl">&times;</div>
);
