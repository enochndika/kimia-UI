import { Button } from '../index';
import { FC } from 'react';

const OutlineButtons: FC = () => (
  <div className="mb-12">
    <h2 className="font-bold text-gray-600 text-lg md:text-2xl mb-3">
      Outline
    </h2>
    <div className="space-x-3 mb-4 md:space-x-6 space-y-3">
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
