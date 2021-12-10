import Button from '../button';
import { FC } from 'react';

const Icon = () => (
  <svg
    width="20"
    height="20"
    fill="currentColor"
    className="mr-2 animate-spin"
    viewBox="0 0 1792 1792"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z" />
  </svg>
);

const AnimateButtons: FC = () => (
  <div className="mb-12">
    <h2 className="mb-3 text-gray-600 text-lg font-bold md:text-2xl">
      Animate
    </h2>
    <div className="space-y-3">
      <Button color="primary" block={true}>
        <Icon />
        Primary
      </Button>
      <Button color="success" block={true}>
        <Icon />
        Success
      </Button>
      <Button color="danger" block={true}>
        <Icon />
        Danger
      </Button>
      <Button color="warning" block={true}>
        <Icon />
        Warning
      </Button>
      <Button block={true}>
        <Icon />
        Dark
      </Button>
      <Button color="indigo" block={true}>
        <Icon />
        Indigo
      </Button>
    </div>
  </div>
);

export default AnimateButtons;
