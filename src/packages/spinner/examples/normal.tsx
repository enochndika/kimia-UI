import { FC } from 'react';
import Spinner from '../spinner';

const SpinnerComponent: FC = () => (
  <div className="mb-8">
    <h2 className="mb-4 text-gray-600 text-lg font-bold md:text-2xl">Normal</h2>
    <div className="flex flex-wrap space-x-3 md:space-x-6">
      <Spinner color="#1d4ed8" className="h-12" />
      <Spinner color="#047857" className="h-12" />
      <Spinner color="#dc2626" className="h-12" />
      <Spinner color="#f59e0b" className="h-12" />
      <Spinner className="h-12" />
      <Spinner color="#312e81" className="h-12" />
    </div>
  </div>
);
export default SpinnerComponent;
