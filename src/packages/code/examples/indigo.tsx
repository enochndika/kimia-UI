import { FC } from 'react';
import Code from '../code';

const IndigoCode: FC = () => (
  <div className="mb-12">
    <h2 className="mb-5 text-gray-600 text-lg font-bold md:text-2xl">Indigo</h2>
    <Code acceptCopy={true} variant="indigo">
      npm install react-query
    </Code>
  </div>
);

export default IndigoCode;
