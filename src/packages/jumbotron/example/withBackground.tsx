import { FC } from 'react';
import Jumbotron from '../jumbotron';

const JumbotronWithBackgroundComponent: FC = () => (
  <div>
    <h2 className="mb-6 mt-20 text-gray-600 text-lg font-bold md:text-2xl">
      Jumbotron with Background
    </h2>
    <Jumbotron className="text-white bg-gradient-to-r from-yellow-400 to-pink-500 via-red-500">
      <h1 className="mb-3 text-2xl md:text-4xl">Kimia-UI Tutorial</h1>
      <p className="mb-3">
        Kimia-UI is a collection of UI components for React built with Tailwind
        CSS and fully customizable that allows you to be more productive
      </p>
      <p>This is some text.</p>
      <p>This is another text.</p>
      <button className="mt-4 px-6 py-1 text-white text-sm active:bg-yellow-500 border border-solid focus:outline-none">
        Learn more
      </button>
    </Jumbotron>
  </div>
);

export default JumbotronWithBackgroundComponent;
