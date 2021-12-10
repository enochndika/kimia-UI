import { FC } from 'react';
import { ListGroup, ListGroupItem } from '../listGroup';

const ListGroupComponent: FC = () => (
  <div className="mb-12">
    <h2 className="mb-3 text-gray-600 text-lg font-bold md:text-2xl">
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
