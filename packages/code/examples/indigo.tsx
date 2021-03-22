import { FC } from 'react';
import Code from '../index';

const IndigoCode: FC = () => (
  <div className="mb-12">
    <h2 className="font-bold text-gray-600 text-lg md:text-2xl mb-5">Indigo</h2>
    <Code acceptCopy={true} variant="indigo">
      npm install react-query
    </Code>
  </div>
);

export default IndigoCode;
