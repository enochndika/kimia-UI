import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}
const Jumbotron = ({ className, children }: Props) => (
  <div
    className={`${className} shadow-lg border font-light border-solid rounded-sm py-12 px-8 mb-8`}
  >
    {children}
  </div>
);

export const JumbotronComponent: FC = () => (
  <div className="container">
    <Jumbotron>
      <h1 className="text-2xl md:text-4xl text-gray-800 mb-3">
        Kitoko-UI Tutorial
      </h1>
      <p className="text-gray-600">
        Kitoko-ui is a collection of React components built with tailwindcss and
        fully customizable that allows you to be more productive
      </p>
      <button className="text-sm px-6 py-1 mt-4 text-white focus:outline-none bg-blue-500">
        Learn more
      </button>
    </Jumbotron>
  </div>
);

export const JumbotronWithBackgroundComponent: FC = () => (
  <div className="container">
    <Jumbotron className="text-white bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
      <h1 className="text-2xl md:text-4xl mb-3">Kitoko-UI Tutorial</h1>
      <p className="mb-3">
        Kitoko-ui is a collection of React components built with tailwindcss and
        fully customizable that allows you to be more productive
      </p>
      <p>This is some text.</p>
      <p>This is another text.</p>
      <button className="text-sm px-6 py-1 mt-4 text-white active:bg-yellow-500 focus:outline-none border-solid border">
        Learn more
      </button>
    </Jumbotron>
  </div>
);
