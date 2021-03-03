import React, { useState, ReactNode, ReactElement, ReactChild } from 'react';

interface Props {
  children: ReactNode;
}

interface TabsProps extends Props {
  variant: number;
}

interface TabProps extends Props {
  selected?: boolean;
  title: string;
}

const variants = {
  first: {
    active: `text-gray-700  border-b-2 border-indigo-700 -mb-2 px-4 md:px-8 text-sm  py-4 md:py-1 inline-block`,
    inactive: `-mb-2 px-4 md:px-8 text-sm  py-4 md:py-1 inline-block border-b`,
  },
  second: {
    active: `inline-block py-2 px-4 border-gray-300 border-t bg-white border-b-0 border-l border-r text-blue-700`,
    inactive: 'inline-block py-2 px-4 text-gray-800 border-b',
  },
  third: {
    active: `text-white py-2 px-4 mx-1 rounded bg-indigo-900 inline-block`,
    inactive: `-mb-2 py-2 px-4 mx-1 bg-white text-black inline-block `,
  },
};

export const Tabs = ({ children, variant }: TabsProps) => {
  const childrenArray: Array<any> = React.Children.toArray(children);
  const [current, setCurrent] = useState<ReactChild>(childrenArray[0].key);
  const newChildren = childrenArray.map((child) =>
    React.cloneElement(child as ReactElement, {
      selected: child.key === current,
    }),
  );
  const classNames = (child, current) => {
    if (variant === 1) {
      return current === child.key
        ? variants.first.active
        : variants.first.inactive;
    } else if (variant === 2) {
      return current === child.key
        ? variants.second.active
        : variants.second.inactive;
    } else if (variant === 3) {
      return current === child.key
        ? variants.third.active
        : variants.third.inactive;
    } else {
      throw Error('Please choose a variant');
    }
  };
  return (
    <nav>
      {childrenArray.map((child) => (
        <div
          onClick={() => setCurrent(child.key)}
          key={child.key}
          className={classNames(child, current)}
          role="button"
        >
          {child.props.title}
        </div>
      ))}
      <section>{newChildren}</section>
    </nav>
  );
};

export const Tab = ({ children, selected }: TabProps) => {
  return (
    <div hidden={!selected} className="mt-4">
      {children}
    </div>
  );
};
