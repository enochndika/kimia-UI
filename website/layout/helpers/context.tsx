import React from 'react';
import { useRouter } from 'next/router';

interface ContextProps {
  open: boolean;
  ref: any;
  toggle: () => void;
}
// create new context
const Context = React.createContext<ContextProps>({
  open: false,
  ref: null,
  toggle: null,
});

export default function LayoutProvider({ children }) {
  const [open, setOpen] = React.useState<boolean>(false);
  const ref = React.useRef<HTMLElement>();
  const router = useRouter();

  const toggle = React.useCallback(() => {
    setOpen(!open);
  }, [open]);

  // close side navigation when you click on a sidenav item. it's triggered when viewport is less than 1024px
  const closeSidenav = () => {
    if (window.innerWidth < 1024) {
      setOpen(false);
    }
  };

  // close side navigation on mobile when route starts changing
  React.useEffect(() => {
    if (open) {
      document.documentElement.style.overflow = 'hidden';
      router.events.on('routeChangeStart', () => closeSidenav());
    }

    return () => {
      if (open) {
        document.documentElement.style.overflow = 'auto';
        router.events.off('routeChangeStart', () => closeSidenav());
      }
    };
  }, [open, router]);

  // close side navigation on click outside when viewport is less than 1024px
  React.useEffect(() => {
    const handleOutsideClick = (event) => {
      if (window.innerWidth < 1024) {
        if (!ref.current?.contains(event.target)) {
          if (!open) return;
          setOpen(false);
        }
      }
    };
    window.addEventListener('click', handleOutsideClick);
    return () => window.removeEventListener('click', handleOutsideClick);
  }, [open, ref]);

  return (
    <Context.Provider value={{ open, ref, toggle }}>
      {children}
    </Context.Provider>
  );
}

// custom hook to consume all context values { open, ref, toggle }
export function useToggle() {
  return React.useContext(Context);
}
