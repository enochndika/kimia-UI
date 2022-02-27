import { useRouter } from 'next/router';
import Overlay from './helpers/overlay';
import TopNavigation from './topnavigation';
import SideNavigation from './sidenavigation';
import LayoutProvider from './helpers/context';
import Footer from '@/website/components/footer';
import useFilteredRoutes from '@/website/hooks/useFilteredRoutes';

const style = {
  container: `flex font-body items-start`,
  main: `pt-24 pb-1 md:px-4 lg:px-6 2xl:px-80`,
  mainContainer: `flex flex-col pl-0 w-full`,
};

export default function Layout({ children }) {
  const { pathname } = useRouter();
  const filtered = useFilteredRoutes(pathname);
  return (
    <LayoutProvider>
      <div className={style.container}>
        <Overlay />
        <TopNavigation />
        <div className={filtered ? 'lg:hidden' : ''}>
          <SideNavigation />
        </div>
        <div
          className={`${style.mainContainer} ${
            filtered ? 'lg:pl-2' : 'lg:pl-72'
          }`}
        >
          <main className={style.main}>
            {children}
            <Footer />
          </main>
        </div>
      </div>
    </LayoutProvider>
  );
}
