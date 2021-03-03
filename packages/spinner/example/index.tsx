import { FC } from 'react';
import { Spinner } from '../../spinner';

export const SpinnerComponent: FC = () => (
  <div className="mb-8">
    <h2 className="font-bold text-gray-600 text-lg md:text-2xl mb-4">Normal</h2>
    <div className="flex flex-wrap space-x-3 md:space-x-6 ">
      <Spinner color="#1d4ed8" className="h-12" />
      <Spinner color="#047857" className="h-12" />
      <Spinner color="#dc2626" className="h-12" />
      <Spinner color="#f59e0b" className="h-12" />
      <Spinner className="h-12" />
      <Spinner color="#312e81" className="h-12" />
    </div>
  </div>
);

export const LargeSpinnerComponent: FC = () => (
  <div className="mb-8">
    <h2 className="font-bold text-gray-600 text-lg md:text-2xl mb-4">Large</h2>
    <div className="flex flex-wrap space-x-3 md:space-x-6 ">
      <Spinner color="#1d4ed8" className="h-28" />
      <Spinner color="#047857" className="h-28" />
      <Spinner color="#dc2626" className="h-28" />
      <Spinner color="#f59e0b" className="h-28" />
      <Spinner className="h-28" />
      <Spinner color="#312e81" className="h-28" />
    </div>
  </div>
);
