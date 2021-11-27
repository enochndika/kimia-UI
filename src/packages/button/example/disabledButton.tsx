import { FC } from 'react';
import Button from '../button';

const DisabledButtons: FC = () => (
  <div className="mb-12">
    <h2 className="mb-3 text-gray-600 text-lg font-bold md:text-2xl">
      Disable
    </h2>
    <div className="mb-4 space-x-1 space-y-3 md:space-x-6">
      <Button color="primary" disabled={true}>
        Primary
      </Button>
      <Button color="success" disabled={true}>
        Success
      </Button>
      <Button color="danger" disabled={true}>
        Danger
      </Button>
      <Button color="warning" disabled={true}>
        Warning
      </Button>
      <Button disabled={true}>Dark</Button>
      <Button color="indigo" disabled={true}>
        Indigo
      </Button>
    </div>
  </div>
);

export default DisabledButtons;
