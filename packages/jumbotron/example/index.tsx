import { FC } from 'react';
import { Jumbotron } from '../../jumbotron';

export const JumbotronComponent: FC = () => (
  <div>
    <h2 className="font-bold text-gray-600 text-lg md:text-2xl mt-12 mb-6">
      Simple Jumbotron
    </h2>
    <Jumbotron>
      <h2 className="text-2xl md:text-4xl text-gray-800 mb-3">
        Kimia-UI Tutorial
      </h2>
      <p className="text-gray-600">
        Kimia-ui is a collection of React components built with tailwindcss and
        fully customizable that allows you to be more productive
      </p>
      <button className="text-sm px-6 py-1 mt-4 text-white focus:outline-none bg-blue-500">
        Learn more
      </button>
    </Jumbotron>
  </div>
);

export const JumbotronWithBackgroundComponent: FC = () => (
  <div>
    <h2 className="font-bold text-gray-600 text-lg md:text-2xl mt-20 mb-6">
      Jumbotron with Background
    </h2>
    <Jumbotron className="text-white bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
      <h1 className="text-2xl md:text-4xl mb-3">Kimia-UI Tutorial</h1>
      <p className="mb-3">
        Kimia-ui is a collection of React components built with tailwindcss and
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
