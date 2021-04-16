import { FC } from 'react';
import Jumbotron from '../index';

const JumbotronWithBackgroundComponent: FC = () => (
  <div>
    <h2 className="font-bold text-gray-600 text-lg md:text-2xl mt-20 mb-6">
      Jumbotron with Background
    </h2>
    <Jumbotron className="text-white bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
      <h1 className="text-2xl md:text-4xl mb-3">Kimia-UI Tutorial</h1>
      <p className="mb-3">
        Kimia-UI is a collection of UI components for React built with Tailwind
        CSS and fully customizable that allows you to be more productive
      </p>
      <p>This is some text.</p>
      <p>This is another text.</p>
      <button className="text-sm px-6 py-1 mt-4 text-white active:bg-yellow-500 focus:outline-none border-solid border">
        Learn more
      </button>
    </Jumbotron>
  </div>
);

export default JumbotronWithBackgroundComponent;
