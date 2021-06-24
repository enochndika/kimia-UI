import SidenavItems from './items';
import SidenavHeader from './header';
import { useToggle } from '../helpers/context';

const style = {
  default: `bg-white h-screen overflow-y-auto pt-0 pb-24 right-0 lg:flex lg:fixed lg:left-0 lg:pt-24 lg:w-72 lg:z-auto`,
  container: `lg:pt-8`,
  close: `hidden`,
  open: `fixed w-8/12 z-40 sm:w-5/12`,
};

const SideNavigation = () => {
  const { open, ref } = useToggle();
  return (
    <aside
      ref={ref}
      className={`${style.default} ${open ? style.open : style.close}`}
    >
      <div className={style.container}>
        <SidenavHeader />
        <ul className="md:pl-6">
          <SidenavItems />
        </ul>
      </div>
    </aside>
  );
};

export default SideNavigation;
