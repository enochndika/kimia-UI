import React from 'react';

interface Props {
  children: React.ReactNode;
}

interface TabsProps extends Props {
  variant: number;
}

interface TabProps extends Props {
  selected?: boolean;
  title: string;
}

const style = {
  first: {
    selected: `text-gray-700  border-b-2 border-indigo-700 -mb-2 px-4 md:px-8 text-sm  py-4 md:py-1 inline-block `,
    notSelected: `-mb-2 px-4 md:px-8 text-sm  py-4 md:py-1 inline-block border-b`,
  },
  second: {
    selected: `inline-block py-2 px-4 border-gray-300 border-t bg-white border-b-0 border-l border-r text-blue-700`,
    notSelected: 'inline-block py-2 px-4 text-gray-800 border-b',
  },
  third: {
    selected: `text-white py-2 px-4 mx-1 rounded bg-indigo-900 inline-block`,
    notSelected: `-mb-2 py-2 px-4 mx-1 bg-white text-black inline-block `,
  },
};

const className = (child, current, variant) => {
  switch (variant) {
    case 1:
      return current === child.key
        ? style.first.selected
        : style.first.notSelected;
    case 2:
      return current === child.key
        ? style.second.selected
        : style.second.notSelected;
    case 3:
      return current === child.key
        ? style.third.selected
        : style.third.notSelected;
    default:
      throw Error('Please choose a variant');
  }
};

export const Tabs = ({ children, variant }: TabsProps) => {
  const childrenArray: Array<any> = React.Children.toArray(children);
  const [current, setCurrent] = React.useState<React.ReactChild>(
    childrenArray[0].key,
  );
  const newChildren = childrenArray.map((child) =>
    React.cloneElement(child as React.ReactElement, {
      selected: child.key === current,
    }),
  );

  return (
    <nav>
      {childrenArray.map((child) => (
        <div
          role="link"
          tabIndex={0}
          onClick={() => setCurrent(child.key)}
          key={child.key}
          className={`${className(child, current, variant)} focus:outline-none`}
        >
          {child.props.title}
        </div>
      ))}
      <section>{newChildren}</section>
    </nav>
  );
};

export const Tab = ({ children, selected }: TabProps) => (
  <div hidden={!selected} className="mt-4">
    {children}
  </div>
);
