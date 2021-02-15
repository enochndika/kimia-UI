import { useState, useRef, ReactNode, FC } from "react";

interface Props {
  title: string;
  children: ReactNode;
  btnClassName: string;
}

const Collapse = ({ children, title, btnClassName }: Props) => {
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

export const CollapseComponent: FC = () => (
  <div>
    <div className="mb-6">
      <Collapse title="Click to see me" btnClassName="bg-blue-700">
        <h2>Next.js</h2>
        <h3>React</h3>
        <h4>JavaScript</h4>
        <h5>Chakra-UI</h5>
      </Collapse>
    </div>
    <div className="mb-6 ">
      <Collapse title="Click to see me" btnClassName="bg-green-700">
        <h2>Tailwindcss</h2>
        <h3>Vercel</h3>
        <h4>Docker</h4>
      </Collapse>
    </div>
    <div className="mb-6">
      <Collapse title="Click to see me" btnClassName="bg-indigo-900">
        <h1>Netlify</h1>
        <h2>Typescript</h2>
      </Collapse>
    </div>
  </div>
);
