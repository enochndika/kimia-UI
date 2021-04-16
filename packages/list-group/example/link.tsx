import ListGroup from '../index';

const ListGroupLinkComponent = () => (
  <div className="mb-12">
    <h2 className="font-bold text-gray-600 text-lg md:text-2xl mb-3">
      List Group as Link
    </h2>
    <ListGroup>
      <ListGroup.Item className="cursor-pointer hover:bg-gray-300" href="#">
        First Item
      </ListGroup.Item>
      <ListGroup.Item className="cursor-pointer hover:bg-gray-300" href="#">
        Second Item
      </ListGroup.Item>
      <ListGroup.Item className="cursor-pointer hover:bg-gray-300" href="#">
        Third Item
      </ListGroup.Item>
    </ListGroup>
  </div>
);

export default ListGroupLinkComponent;
