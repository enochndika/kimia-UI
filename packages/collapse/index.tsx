import { useRef, ReactNode } from 'react';

interface Props {
  isOpen: boolean;
  children: ReactNode;
}

const Collapse = ({ children, isOpen }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const inlineStyle = isOpen
    ? { height: ref.current?.scrollHeight }
    : { height: 0 };

  return (
    <div
      className="mt-2 overflow-hidden text-gray-600 transition-height ease duration-300"
      ref={ref}
      style={inlineStyle}
    >
      {children}
    </div>
  );
};

export default Collapse;
