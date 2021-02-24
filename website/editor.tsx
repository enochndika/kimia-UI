import { useState, useEffect } from 'react';
import { LiveEditor, LiveProvider } from 'react-live';
import { CopyToClipboard } from 'react-copy-to-clipboard';

interface Props {
  code: string;
  defaultHeight?: boolean;
}
const Editor = ({ code, defaultHeight }: Props) => {
  const [value, setValue] = useState<boolean | string>(code);
  const [copied, setCopied] = useState<boolean>(false);
  let resetCopy;

  const onCopy = () => {
    setValue(true);
    setCopied(true);
  };

  useEffect(() => {
    if (copied) {
      resetCopy = setTimeout(() => setCopied(false), 5000);
    }

    return () => {
      clearTimeout(resetCopy);
    };
  }, [copied]);

  return (
    <div className="mt-12 mb-20">
      <CopyToClipboard onCopy={onCopy} text={value}>
        <button className="flex border-gray-600 font-bold border-2 text-gray-600 mb-2 px-5 py-2 text-xs focus:outline-none">
          <svg
            width="15"
            height="15"
            fill="currentColor"
            className="mr-2"
            viewBox="0 0 1792 1792"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1696 384q40 0 68 28t28 68v1216q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-288h-544q-40 0-68-28t-28-68v-672q0-40 20-88t48-76l408-408q28-28 76-48t88-20h416q40 0 68 28t28 68v328q68-40 128-40h416zm-544 213l-299 299h299v-299zm-640-384l-299 299h299v-299zm196 647l316-316v-416h-384v416q0 40-28 68t-68 28h-416v640h512v-256q0-40 20-88t48-76zm956 804v-1152h-384v416q0 40-28 68t-68 28h-416v640h896z" />
          </svg>
          {copied ? 'copied !' : 'copy'}
        </button>
      </CopyToClipboard>
      <div
        className={`${
          defaultHeight ? 'h-auto' : 'h-xl '
        } bg-code text-sm overflow-y-scroll`}
      >
        <LiveProvider code={code} disabled>
          <LiveEditor />
        </LiveProvider>
      </div>
    </div>
  );
};

export default Editor;
