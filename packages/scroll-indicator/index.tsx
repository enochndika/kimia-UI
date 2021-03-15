import { useState, useEffect, ReactNode } from 'react';

interface ScrollIndicatorProps {
  children: ReactNode;
}

export const ScrollIndicator = ({ children }: ScrollIndicatorProps) => {
  const [scroll, setScroll] = useState<number | string>(0);

  const onScrollProgress = () => {
    const scrollPx = document.documentElement.scrollTop;
    const winHeightPx =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = `${(scrollPx / winHeightPx) * 100}%`;

    setScroll(scrolled);
  };
  useEffect(() => {
    window.addEventListener('scroll', onScrollProgress);

    return () => {
      window.removeEventListener('scroll', onScrollProgress);
    };
  }, []);

  const progressBarStyle = {
    height: '6px',
    background: '#4C1D95',
    width: scroll,
  };

  return (
    <>
      <div className="top-0 left-0 w-screen h-1.5 fixed z-40 shadow-2xl bg-gray-300">
        <div style={progressBarStyle} />
      </div>
      {children}
    </>
  );
};
