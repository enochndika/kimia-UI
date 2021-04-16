import { FC } from 'react';
import Code from '../index';

const WithoutCopyCode: FC = () => (
  <div className="mb-12">
    <h2 className="font-bold text-gray-600 text-lg md:text-2xl mb-5">
      Without copy icon
    </h2>
    <Code variant="default">yarn add sequelize</Code>
    <div className="mb-5" />
    <Code variant="default">npm install mongoose</Code>
  </div>
);

export default WithoutCopyCode;
