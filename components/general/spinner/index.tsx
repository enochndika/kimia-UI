import { FC } from "react";
import { Container } from "../../../site/container";

interface Props {
  size: string | number;
  color?: string;
}

const Spinner = ({ size, color }: Props) => (
  <svg
    height={size}
    fill={color}
    viewBox="0 0 1792 1792"
    className="animate-spin"
    width={size}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M1760 896q0 176-68.5 336t-184 275.5-275.5 184-336 68.5-336-68.5-275.5-184-184-275.5-68.5-336q0-213 97-398.5t265-305.5 374-151v228q-221 45-366.5 221t-145.5 406q0 130 51 248.5t136.5 204 204 136.5 248.5 51 248.5-51 204-136.5 136.5-204 51-248.5q0-230-145.5-406t-366.5-221v-228q206 31 374 151t265 305.5 97 398.5z" />
  </svg>
);

export const SpinnerComponent: FC = () => (
  <>
    <h2 className="font-bold text-gray-600 text-lg md:text-2xl mt-12 mb-4">
      Normal
    </h2>
    <div className="flex space-x-3 md:space-x-6 ">
      <Spinner size={45} color="#1d4ed8" />
      <Spinner size={45} color="#047857" />
      <Spinner size={45} color="#dc2626" />
      <Spinner size={45} color="#f59e0b" />
      <Spinner size={45} />
      <Spinner size={45} color="#312e81" />
    </div>
  </>
);

export const LargeSpinnerComponent: FC = () => (
  <>
    <h2 className="font-bold text-gray-600 text-lg md:text-2xl mt-20 mb-4">
      Large
    </h2>
    <div className="flex space-x-3 md:space-x-6 ">
      <Spinner size={115} color="#1d4ed8" />
      <Spinner size={115} color="#047857" />
      <Spinner size={115} color="#dc2626" />
      <Spinner size={115} color="#f59e0b" />
      <Spinner size={115} />
      <Spinner size={115} color="#312e81" />
    </div>
  </>
);
