import React from 'react';

type Props = {
  duration?: number;
};

export default function useClipboard(props?: Props) {
  const [copied, setCopied] = React.useState<boolean>(false);
  const ref = React.useRef<HTMLElement | HTMLDivElement | any>(null);
  const resetCopy = React.useRef<any>(null);

  const onCopy = React.useCallback(() => {
    navigator.clipboard
      .writeText(ref.current?.innerText)
      .then(() => setCopied(true));
  }, [ref]);

  React.useEffect(() => {
    if (copied) {
      resetCopy.current = setTimeout(
        () => setCopied(false),
        props?.duration || 3000,
      );
    }

    return () => {
      clearTimeout(resetCopy.current);
    };
  }, [copied, props.duration]);

  return { copied, ref, onCopy };
}
