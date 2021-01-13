import { Button } from "./index";

const RoundedButtons = () => (
  <div className="mb-20">
    <h2 className="font-bold text-gray-600 text-lg md:text-2xl mb-4">
      Rounded
    </h2>
    <div className="space-x-3 mb-4 md:space-x-6 space-y-3">
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
