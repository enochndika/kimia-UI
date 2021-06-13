import React from 'react';

type Props = {
  duration?: number;
};

const useClipboard = (props?: Props) => {
  const [copied, setCopied] = React.useState<boolean>(false);
  const ref = React.useRef<HTMLElement | HTMLDivElement | any>(null);
  let resetCopy;

  const onCopy = React.useCallback(() => {
    navigator.clipboard
      .writeText(ref.current?.innerText)
      .then(() => setCopied(true));
  }, [ref, copied]);

  React.useEffect(() => {
    if (copied) {
      resetCopy = setTimeout(() => setCopied(false), props?.duration || 3000);
    }

    return () => {
      clearTimeout(resetCopy);
    };
  }, [copied]);

  return { copied, ref, onCopy };
};

export default useClipboard;
