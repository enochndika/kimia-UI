import { FC } from 'react';
import Jumbotron from '../jumbotron';

const JumbotronComponent: FC = () => (
  <div>
    <h2 className="mb-6 mt-12 text-gray-600 text-lg font-bold md:text-2xl">
      Simple Jumbotron
    </h2>
    <Jumbotron>
      <h2 className="mb-3 text-gray-800 text-2xl md:text-4xl">
        Kimia-UI Tutorial
      </h2>
      <p className="text-gray-600">
        Kimia-UI is a collection of UI components for React built with Tailwind
        CSS and fully customizable that allows you to be more productive
      </p>
      <button className="mt-4 px-6 py-1 text-white text-sm bg-blue-500 focus:outline-none">
        Learn more
      </button>
    </Jumbotron>
  </div>
);

export default JumbotronComponent;
