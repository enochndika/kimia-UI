import { FC } from "react";

export const Footer: FC = () => (
  <footer className="py-4 border-t text-gray-500 bottom-0 ">
    <div className="overflow-hidden text-center">
      <div className="container">
        <span className="mx-1">Made with love by</span>
        <a
          href="https://enochndika.vercel.app"
          className="text-gray-700 font-bold cursor-pointer"
          rel="noreferrer"
          target="_blank"
        >
          Enoch Ndika
        </a>
      </div>
    </div>
  </footer>
);
