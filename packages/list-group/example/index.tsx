import { FC } from 'react';
import { ListGroup } from '../../list-group';

export const ListGroupComponent: FC = () => (
  <div className="mb-12">
    <h2 className="font-bold text-gray-600 text-lg md:text-2xl mb-3">
      Simple List Group
    </h2>
    <ListGroup>
      <ListGroup.Item>First Item</ListGroup.Item>
      <ListGroup.Item>Second Item</ListGroup.Item>
      <ListGroup.Item>Third Item</ListGroup.Item>
    </ListGroup>
  </div>
);

export const ColoredListGroupComponent: FC = () => (
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

export const ListGroupLinkComponent = () => (
  <div className="mb-12">
    <h2 className="font-bold text-gray-600 text-lg md:text-2xl mb-3">
      List Group as Link
    </h2>
    <ListGroup>
      <ListGroup.Item className="cursor-pointer hover:bg-gray-300">
        First Item
      </ListGroup.Item>
      <ListGroup.Item className="cursor-pointer hover:bg-gray-300">
        Second Item
      </ListGroup.Item>
      <ListGroup.Item className="cursor-pointer hover:bg-gray-300">
        Third Item
      </ListGroup.Item>
    </ListGroup>
  </div>
);
