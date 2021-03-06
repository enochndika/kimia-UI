import { FC } from 'react';
import Button from '../index';

const SizedButtons: FC = () => (
  <div className="mb-12">
    <h2 className="font-bold text-gray-600 text-lg md:text-2xl mb-3">
      Different sizes
    </h2>
    <div className="space-x-1 mb-4 md:space-x-6 space-y-3">
      <Button color="primary">Primary</Button>
      <Button color="success" size="lg">
        Success
      </Button>
      <Button color="danger" size="sm">
        Danger
      </Button>
      <Button color="warning" size="lg">
        Warning
      </Button>
      <Button size="sm">Dark</Button>
      <Button color="indigo">Indigo</Button>
    </div>
  </div>
);

export default SizedButtons;
