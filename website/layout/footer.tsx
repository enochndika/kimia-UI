import { FC } from 'react';

export const Footer: FC = () => (
  <footer className="py-4 border-t mt-8 relative md:absolute text-gray-500 bottom-0 left-0 right-0">
    <div className="overflow-hidden text-center">
      <div className="container">
        <span className="mx-1">Made with love by</span>
        <a
          href="https://github.com/enochndika"
          className="text-gray-700 font-bold cursor-pointer"
        >
          Enoch Ndika
        </a>
      </div>
    </div>
  </footer>
);
