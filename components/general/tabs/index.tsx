import { ReactNode, useState } from "react";

interface Props {
  children: ReactNode;
}

interface TabsProps {
  variant: 1 | 2 | 3;
  children: ReactNode | any;
}

interface TabsContent extends Props {
  id: string;
}

interface TabContainerProps {
  onClick: (id: string) => void;
  id: string;
  activeTab: any;
  activeClass: string;
  inactiveClass: string;
}
export const Tabs = ({ children, variant }: TabsProps) => {
  const [activeTab, setActiveTab] = useState<any>(children[0].props.id);

  const activeClassName =
    variant === 1
      ? variants.first.active
      : variant === 2
      ? variants.second.active
      : variant === 3
      ? variants.three.active
      : variants.first.active;

  const inactiveClassName =
    variant === 1
      ? variants.first.inactive
      : variant === 2
      ? variants.second.inactive
      : variant === 3
      ? variants.three.inactive
      : variants.first.inactive;

  const onClickTabItem = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <ol>
        {children.map((child) => {
          const { id } = child.props;
          return (
            <Tabs.Container
              activeTab={activeTab}
              key={id}
              id={id}
              onClick={onClickTabItem}
              activeClass={activeClassName}
              inactiveClass={inactiveClassName}
            />
          );
        })}
      </ol>
      <div className="pt-6">
        {children.map((child) => {
          if (child.props.id !== activeTab) return undefined;
          return child.props.children;
        })}
      </div>
    </div>
  );
};

Tabs.Container = ({
  onClick,
  id,
  activeTab,
  activeClass,
  inactiveClass,
}: TabContainerProps) => {
  const isClick = () => {
    onClick(id);
  };

  let className = inactiveClass;
  if (activeTab === id) {
    className = activeClass;
  }

  return (
    <li className={className} onClick={isClick}>
      {id}
    </li>
  );
};

Tabs.Content = ({ id, children }: TabsContent) => <div id={id}>{children}</div>;

const variants = {
  first: {
    active: `text-gray-700  border-b-2 border-indigo-700 -mb-2 px-4 md:px-8 text-sm  py-4 md:py-1 inline-block `,
    inactive: `-mb-2 px-4 md:px-8 text-sm  py-4 md:py-1 inline-block border-b transition ease-linear duration-200`,
  },
  second: {
    active: `inline-block py-2 px-8 border-solid  border-gray-300 border-t bg-white border-b-0 border-l border-r text-blue-700`,
    inactive: "inline-block py-2 px-8 text-gray-800 border-b px-8",
  },
  three: {
    active: `text-white py-2 px-8 bg-indigo-900 inline-block transition ease-linear duration-200`,
    inactive: `-mb-2 py-2 px-8 bg-white text-black  inline-block transition ease-linear duration-200`,
  },
};
