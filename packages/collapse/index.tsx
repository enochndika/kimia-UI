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
      className="transition-height ease mt-2 text-gray-600 overflow-hidden duration-300"
      ref={ref}
      style={inlineStyle}
    >
      {children}
    </div>
  );
};

export default Collapse;
