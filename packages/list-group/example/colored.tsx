import { FC } from 'react';
import { ListGroup, ListGroupItem } from '../index';

const ColoredListGroupComponent: FC = () => (
  <div className="mb-12">
    <h2 className="font-bold text-gray-600 text-lg md:text-2xl mb-3">
      Colored List Group
    </h2>
    <div className="md:w-4/12">
      <ListGroup>
        <ListGroupItem className="bg-blue-700">First Item</ListGroupItem>
        <ListGroupItem className="bg-green-700">Second Item</ListGroupItem>
        <ListGroupItem className="bg-purple-900">Third Item</ListGroupItem>
      </ListGroup>
    </div>
  </div>
);

export default ColoredListGroupComponent;
