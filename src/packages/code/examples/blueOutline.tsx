import { FC } from 'react';
import Code from '../code';

const BlueOutlineCode: FC = () => (
  <div className="mb-12">
    <h2 className="mb-5 text-gray-600 text-lg font-bold md:text-2xl">
      Outline Blue
    </h2>
    <Code acceptCopy={true} variant="blue-outline">
      yarn add swr react-table
    </Code>
  </div>
);

export default BlueOutlineCode;
