import { FC } from 'react';
import ListGroup from '@/packages/list-group';

const ListGroupComponent: FC = () => (
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

export default ListGroupComponent;
