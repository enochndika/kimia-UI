import { FC } from 'react';
import Button from '../button';

const OutlineButtons: FC = () => (
  <div className="mb-12">
    <h2 className="mb-3 text-gray-600 text-lg font-bold md:text-2xl">
      Outline
    </h2>
    <div className="mb-4 space-x-3 space-y-3 md:space-x-6">
      <Button color="primary" outline={true}>
        Primary
      </Button>
      <Button color="success" outline={true}>
        Success
      </Button>
      <Button color="danger" outline={true}>
        Danger
      </Button>
      <Button color="warning" outline={true}>
        Warning
      </Button>
      <Button outline={true}>Dark</Button>
      <Button color="indigo" outline={true}>
        Indigo
      </Button>
    </div>
  </div>
);

export default OutlineButtons;
