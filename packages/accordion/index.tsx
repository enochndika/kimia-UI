import { HTMLAttributes, ReactNode, useRef } from 'react';

interface AccordionProps {
  children: ReactNode;
  id: string;
  isOpen: string;
}

interface AccordionHeaderProps extends HTMLAttributes<HTMLElement> {
  accordionId: string;
  id: string;
  children: ReactNode;
  upIcon: ReactNode;
  downIcon: ReactNode;
  variant: 'gray' | 'indigo';
}

const style = {
  accordion: `overflow-hidden md:overflow-x-hidden transition-height ease duration-300 text-gray-600`,
  accordionHeader: {
    gray: `block focus:outline-none bg-gray-800 text-white border-b my-2 p-3`,
    indigo: `block focus:outline-none bg-indigo-800 text-white border-b my-2 p-3`,
  },
};

export const Accordion = ({ children, id, isOpen }: AccordionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const inlineStyle =
    isOpen === id ? { height: ref.current?.scrollHeight } : { height: 0 };

  return (
    <div id={id} className={style.accordion} ref={ref} style={inlineStyle}>
      {children}
    </div>
  );
};

export const AccordionHeader = ({
  accordionId,
  id,
  children,
  upIcon,
  downIcon,
  variant,
  ...rest
}: AccordionHeaderProps) => (
  <div role="button" {...rest} className={style.accordionHeader[variant]}>
    {children}
    <span className="float-right">
      {accordionId === id ? upIcon : downIcon}
    </span>
  </div>
);
