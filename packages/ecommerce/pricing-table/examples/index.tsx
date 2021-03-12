import { FC } from 'react';
import { CheckIcon, CloseIcon, Price } from '../index';

export const PricingTableExample: FC = () => {
  return (
    <Price>
      <Price.Group title="Basic" titleBackground="bg-blue-600">
        <Price.Item className="text-gray-700 font-bold">
          $ 5.99 / year
        </Price.Item>
        <Price.Item>
          <CheckIcon />
          <span className="ml-2">3 Domains</span>
        </Price.Item>
        <Price.Item>
          <CheckIcon />
          <span className="ml-2">15 GB Storage</span>
        </Price.Item>
        <Price.Item>
          <CheckIcon />
          <span className="ml-2">1 GB Bandwidth</span>
        </Price.Item>
        <Price.Item>
          <CloseIcon />
          <span className="ml-2">24h Support</span>
        </Price.Item>
        <Price.Item>
          <button className="text-sm px-6 py-1 text-white focus:outline-none bg-blue-600">
            Sign up
          </button>
        </Price.Item>
      </Price.Group>
      <Price.Group title="Pro" titleBackground="bg-purple-900">
        <Price.Item className="text-gray-700 font-bold">
          $ 15.99 / year
        </Price.Item>
        <Price.Item>
          <CheckIcon />
          <span className="ml-2">5 Domains</span>
        </Price.Item>
        <Price.Item>
          <CheckIcon />
          <span className="ml-2">30 GB Storage</span>
        </Price.Item>
        <Price.Item>
          <CheckIcon />
          <span className="ml-2">2 GB Bandwidth</span>
        </Price.Item>
        <Price.Item>
          <CloseIcon />
          <span className="ml-2">24h Support</span>
        </Price.Item>
        <Price.Item>
          <button className="text-sm px-6 py-1 text-white focus:outline-none bg-purple-900">
            Sign Up
          </button>
        </Price.Item>
      </Price.Group>
      <Price.Group title="Premium" titleBackground="bg-green-700">
        <Price.Item className="text-gray-700 font-bold">
          $ 29.99 / year
        </Price.Item>
        <Price.Item>
          <CheckIcon />
          <span className="ml-2">10 Domains</span>
        </Price.Item>
        <Price.Item>
          <CheckIcon />
          <span className="ml-2">60 GB Storage</span>
        </Price.Item>
        <Price.Item>
          <CheckIcon />
          <span className="ml-2">5 GB Bandwidth</span>
        </Price.Item>
        <Price.Item>
          <CheckIcon />
          <span className="ml-2">24h Support</span>
        </Price.Item>
        <Price.Item>
          <button className="text-sm px-6 py-1 text-white focus:outline-none bg-green-700">
            Sign Up
          </button>
        </Price.Item>
      </Price.Group>
    </Price>
  );
};
