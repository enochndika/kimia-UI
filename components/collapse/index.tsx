import { useState, useRef, ReactNode } from 'react';

interface Props {
  title: string;
  children: ReactNode;
  btnClassName: string;
}

export const Collapse = ({ children, title, btnClassName }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);
  const style = isOpen ? { height: ref.current?.scrollHeight } : { height: 0 };

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${btnClassName} text-white focus:outline-none shadow rounded px-6 py-2 font-medium transition ease-in duration-200 `}
      >
        {title}
      </button>
      <div
        className="mt-2 overflow-hidden text-gray-600 transition-height ease duration-300"
        ref={ref}
        style={style}
      >
        {children}
      </div>
    </div>
  );
};
