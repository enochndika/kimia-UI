import Tooltip from '../index';

const TooltipComponent = () => (
  <div className="flex justify-center md:justify-start">
    <div className="mb-4 mr-2 md:mr-4">
      <Tooltip
        className="bg-green-700 w-28"
        iconClassName="text-green-700"
        position="top"
        title="Hover me"
      >
        Enoch Ndika
      </Tooltip>
    </div>
    <div className="mb-4 mr-2 md:mr-4">
      <Tooltip
        className="bg-black w-24"
        iconClassName="text-black"
        position="top"
        title="Hover me"
      >
        Next.js
      </Tooltip>
    </div>
    <div className="mb-4">
      <Tooltip
        className="bg-blue-700 w-24"
        iconClassName="text-blue-700"
        position="bottom"
        title="Hover me"
      >
        React
      </Tooltip>
    </div>
  </div>
);

export default TooltipComponent;
