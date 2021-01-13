import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

const ListGroup = ({ children, className }: Props) => (
  <ul
    className={`${className} list-reset flex flex-col pl-0 mb-0 w-full md:w-4/12`}
  >
    {children}
  </ul>
);

ListGroup.Item = ({ children, className }: Props) => (
  <li
    className={`${className} relative block py-3 px-5 relative -mb-px block border border-grey`}
  >
    {children}
  </li>
);

export const ListGroupComponent: FC = () => (
  <ListGroup>
    <ListGroup.Item>First Item</ListGroup.Item>
    <ListGroup.Item>Second Item</ListGroup.Item>
    <ListGroup.Item>Third Item</ListGroup.Item>
  </ListGroup>
);

export const ColoredListGroupComponent: FC = () => (
  <ListGroup>
    <ListGroup.Item className="bg-blue-700">First Item</ListGroup.Item>
    <ListGroup.Item className="bg-green-700">Second Item</ListGroup.Item>
    <ListGroup.Item className="bg-purple-900">Third Item</ListGroup.Item>
  </ListGroup>
);

export const ListGroupLinkComponent = () => (
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
);
