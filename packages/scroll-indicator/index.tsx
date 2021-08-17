import React from 'react';

interface ScrollIndicatorProps {
  children: React.ReactNode;
}

const ScrollIndicator = ({ children }: ScrollIndicatorProps) => {
  const [scroll, setScroll] = React.useState<number | string>(0);

  const onScrollProgress = () => {
    const html = document.documentElement;
    const scrollPx = html.scrollTop;
    const winHeightPx = html.scrollHeight - html.clientHeight;
    const scrolled = `${(scrollPx / winHeightPx) * 100}%`;

    setScroll(scrolled);
  };
  React.useEffect(() => {
    window.addEventListener('scroll', onScrollProgress);

    return () => {
      window.removeEventListener('scroll', onScrollProgress);
    };
  }, []);

  const inlineStyle = {
    height: '6px',
    background: '#4C1D95',
    width: scroll,
  };

  return (
    <>
      <div className="fixed z-40 left-0 top-0 w-screen h-1.5 bg-gray-300 shadow-2xl">
        <div style={inlineStyle} />
      </div>
      {children}
    </>
  );
};

export default ScrollIndicator;
