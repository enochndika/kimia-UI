import { FC } from 'react';
import ListGroup from '../index';

const ColoredListGroupComponent: FC = () => (
  <div className="mb-12">
    <h2 className="font-bold text-gray-600 text-lg md:text-2xl mb-3">
      Colored List Group
    </h2>
    <ListGroup>
      <ListGroup.Item className="bg-blue-700">First Item</ListGroup.Item>
      <ListGroup.Item className="bg-green-700">Second Item</ListGroup.Item>
      <ListGroup.Item className="bg-purple-900">Third Item</ListGroup.Item>
    </ListGroup>
  </div>
);

export default ColoredListGroupComponent;
