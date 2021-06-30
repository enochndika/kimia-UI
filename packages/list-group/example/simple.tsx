import { FC } from 'react';
import { ListGroup, ListGroupItem } from '../index';

const ListGroupComponent: FC = () => (
  <div className="mb-12">
    <h2 className="font-bold text-gray-600 text-lg md:text-2xl mb-3">
      Simple List Group
    </h2>
    <div className="md:w-4/12">
      <ListGroup>
        <ListGroupItem>First Item</ListGroupItem>
        <ListGroupItem>Second Item</ListGroupItem>
        <ListGroupItem>Third Item</ListGroupItem>
      </ListGroup>
    </div>
  </div>
);

export default ListGroupComponent;
