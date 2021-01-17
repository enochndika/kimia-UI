import { Button } from "./index";
import { FC } from "react";

const DefaultButtons: FC = () => (
  <div className="mb-20">
    <h2 className="font-bold text-gray-600 text-lg md:text-2xl mb-3">Normal</h2>
    <div className="space-x-1 mb-4 md:space-x-6 space-y-3">
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
