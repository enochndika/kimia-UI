import Tooltip from '../tooltip';

const TooltipComponent = () => (
  <div className="flex justify-center md:justify-start">
    <div className="mb-4 mr-2 md:mr-4">
      <Tooltip
        className="w-28 bg-green-700"
        iconClassName="text-green-700"
        position="top"
        title="Hover me"
      >
        Enoch Ndika
      </Tooltip>
    </div>
    <div className="mb-4 mr-2 md:mr-4">
      <Tooltip
        className="w-24 bg-black"
        iconClassName="text-black"
        position="top"
        title="Hover me"
      >
        Next.js
      </Tooltip>
    </div>
    <div className="mb-4">
      <Tooltip
        className="w-24 bg-blue-700"
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
