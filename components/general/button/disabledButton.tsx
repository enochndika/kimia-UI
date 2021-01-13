import { Button } from "./index";
import { FC } from "react";

const DisabledButtons: FC = () => (
  <div className="mb-20">
    <h2 className="font-bold text-gray-600 text-lg md:text-2xl mb-3">
      Disable
    </h2>
    <div className="space-x-3 mb-4 md:space-x-6 space-y-3">
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
