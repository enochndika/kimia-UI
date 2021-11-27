import { FC } from 'react';
import Code from '../code';

const WithoutCopyCode: FC = () => (
  <div className="mb-12">
    <h2 className="mb-5 text-gray-600 text-lg font-bold md:text-2xl">
      Without copy
    </h2>
    <Code variant="default">yarn add sequelize</Code>
    <div className="mb-5" />
    <Code variant="default">npm install mongoose</Code>
  </div>
);

export default WithoutCopyCode;
