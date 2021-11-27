import { FC } from 'react';
import Button from '../button';

const DefaultButtons: FC = () => (
  <div className="mb-12">
    <h2 className="mb-3 text-gray-600 text-lg font-bold md:text-2xl">Normal</h2>
    <div className="mb-4 space-x-1 space-y-3 md:space-x-6">
      <Button color="primary">Primary</Button>
      <Button color="success">Success</Button>
      <Button color="danger">Danger</Button>
      <Button color="warning">Warning</Button>
      <Button>Dark</Button>
      <Button color="indigo">Indigo</Button>
    </div>
  </div>
);

export default DefaultButtons;
