import { FC } from 'react';
import Jumbotron from '../index';

const JumbotronComponent: FC = () => (
  <div>
    <h2 className="font-bold text-gray-600 text-lg md:text-2xl mt-12 mb-6">
      Simple Jumbotron
    </h2>
    <Jumbotron>
      <h2 className="text-2xl md:text-4xl text-gray-800 mb-3">
        Kimia-UI Tutorial
      </h2>
      <p className="text-gray-600">
        Kimia-UI is a collection of UI components for React built with Tailwind
        CSS and fully customizable that allows you to be more productive
      </p>
      <button className="text-sm px-6 py-1 mt-4 text-white focus:outline-none bg-blue-500">
        Learn more
      </button>
    </Jumbotron>
  </div>
);

export default JumbotronComponent;
