import { ListGroup, ListGroupItem } from '../index';

const ListGroupLinkComponent = () => (
  <div className="mb-12">
    <h2 className="font-bold text-gray-600 text-lg md:text-2xl mb-3">
      List Group as Link
    </h2>
    <div className="md:w-4/12">
      <ListGroup>
        <ListGroupItem className="cursor-pointer hover:bg-gray-300" href="#">
          First Item
        </ListGroupItem>
        <ListGroupItem className="cursor-pointer hover:bg-gray-300" href="#">
          Second Item
        </ListGroupItem>
        <ListGroupItem className="cursor-pointer hover:bg-gray-300" href="#">
          Third Item
        </ListGroupItem>
      </ListGroup>
    </div>
  </div>
);

export default ListGroupLinkComponent;
