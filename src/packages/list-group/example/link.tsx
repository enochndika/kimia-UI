import { ListGroup, ListGroupItem } from '../listGroup';

const ListGroupLinkComponent = () => (
  <div className="mb-12">
    <h2 className="mb-3 text-gray-600 text-lg font-bold md:text-2xl">
      List Group as Link
    </h2>
    <div className="md:w-4/12">
      <ListGroup>
        <ListGroupItem className="hover:bg-gray-300 cursor-pointer" href="#">
          First Item
        </ListGroupItem>
        <ListGroupItem className="hover:bg-gray-300 cursor-pointer" href="#">
          Second Item
        </ListGroupItem>
        <ListGroupItem className="hover:bg-gray-300 cursor-pointer" href="#">
          Third Item
        </ListGroupItem>
      </ListGroup>
    </div>
  </div>
);

export default ListGroupLinkComponent;
