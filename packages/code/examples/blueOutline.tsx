import { FC } from 'react';
import Code from '../index';

const BlueOutlineCode: FC = () => (
  <div className="mb-12">
    <h2 className="font-bold text-gray-600 text-lg md:text-2xl mb-5">
      Outline Blue
    </h2>
    <Code acceptCopy={true} variant="blue-outline">
      yarn add swr react-table
    </Code>
  </div>
);

export default BlueOutlineCode;
