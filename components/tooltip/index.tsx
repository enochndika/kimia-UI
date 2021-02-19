import { ReactNode } from "react";

interface Props {
  title: string;
  position: "top" | "bottom";
  children: ReactNode;
  className: string;
  iconClassName?: string;
}

const positions = {
  top: "bottom-full",
  bottom: "top-full",
};

const Tooltip = ({
  position,
  title,
  children,
  className,
  iconClassName,
}: Props) => (
  <div className="group cursor-pointer relative  w-28 text-center">
    {title}
    <div
      className={`${positions[position]} ${className} opacity-0 text-white text-center text-xs rounded-lg py-2 absolute z-10 group-hover:opacity-100 -left-1/2 ml-14 px-3 pointer-events-none`}
    >
      {children}
      <svg
        className={`${iconClassName} absolute h-2 w-full left-0 top-full`}
        x="0px"
        y="0px"
        viewBox="0 0 255 255"
        xmlSpace="preserve"
      >
        <polygon className="fill-current" points="0,0 127.5,127.5 255,0" />
      </svg>
    </div>
  </div>
);

export const TooltipComponent = () => (
  <div className="flex justify-center md:justify-start">
    <div className="m-4">
      <Tooltip
        className="bg-green-700 w-28"
        iconClassName="text-green-700"
        position="top"
        title="Hover me"
      >
        Enoch Ndika
      </Tooltip>
    </div>
    <div className="m-4">
      <Tooltip
        className="bg-black w-24"
        iconClassName="text-black"
        position="top"
        title="Hover me"
      >
        Next.js
      </Tooltip>
    </div>
    <div className="m-4">
      <Tooltip
        className="bg-blue-700 w-24"
        iconClassName="text-blue-700"
        position="bottom"
        title="Hover me"
      >
        React
      </Tooltip>
    </div>
  </div>
);
