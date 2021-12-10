import { FC } from 'react';
import Button from '../button';

const RoundedButtons: FC = () => (
  <div className="mb-12">
    <h2 className="mb-4 text-gray-600 text-lg font-bold md:text-2xl">
      Rounded
    </h2>
    <div className="mb-4 space-x-1 space-y-3 md:space-x-6">
      <Button color="primary" rounded={true}>
        Primary
      </Button>
      <Button color="success" rounded={true}>
        Success
      </Button>
      <Button color="danger" rounded={true}>
        Danger
      </Button>
      <Button color="warning" rounded={true}>
        Warning
      </Button>
      <Button rounded={true}>Dark</Button>
      <Button color="indigo" rounded={true}>
        Indigo
      </Button>
    </div>
  </div>
);

export default RoundedButtons;
