import { useState, useEffect, useRef, useCallback } from 'react';

type Props = {
  duration?: number;
};

const useCopyToClipboard = (props?: Props) => {
  const [copied, setCopied] = useState<boolean>(false);
  const ref = useRef<HTMLElement | HTMLDivElement | any>(null);
  let resetCopy;

  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(ref.current?.innerText);
    setCopied(true);
  }, [ref, copied]);

  useEffect(() => {
    if (copied) {
      resetCopy = setTimeout(() => setCopied(false), props?.duration || 3000);
    }

    return () => {
      clearTimeout(resetCopy);
    };
  }, [copied]);

  return { copied, ref, onCopy };
};

export default useCopyToClipboard;
