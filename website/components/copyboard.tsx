import React from 'react';
import Confetti from 'react-dom-confetti';
import nightOwl from 'prism-react-renderer/themes/nightOwl';
import Highlight, { defaultProps, Language } from 'prism-react-renderer';

import s from './copyboard.module.css';
import CodeWrapper from './codeWrapper';

export interface CopyboardProps {
  codeString: string;
  language: Language;
}

const config = {
  angle: 180,
  spread: 360,
  startVelocity: 40,
  elementCount: 100,
  dragFriction: 0.12,
  duration: 5000,
  stagger: 4,
  width: '10px',
  height: '10px',
  colors: ['#a864fd', '#29cdff', '#78ff44', '#ff718d', '#fdff6a'],
};

const copyToClipboard = (str) => {
  const el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
};

const Button = (props) => (
  <button
    style={{
      border: 'none',
      boxShadow: 'none',
      textDecoration: 'none',
      position: 'absolute',
      top: 0,
      right: 0,
      margin: '8px',
      padding: '8px 12px',
      background: '#E2E8F022',
      borderRadius: '8px',
      cursor: 'pointer',
      color: '#E2E8F0',
      fontSize: '14px',
      fontFamily: 'sans-serif',
      lineHeight: '1',
    }}
    {...props}
  />
);

export default function Copyboard({ codeString }: CopyboardProps) {
  const [isCopied, setIsCopied] = React.useState(false);

  return (
    <CodeWrapper>
      <div className="relative">
        <Highlight
          {...defaultProps}
          code={codeString}
          language="jsx"
          theme={nightOwl}
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre
              className={`${className} ${s.pre}`}
              style={{
                ...style,
                padding: '2rem',
                position: 'relative',
              }}
            >
              <Button
                className="focus:outline-none"
                onClick={() => {
                  copyToClipboard(codeString);
                  setIsCopied(true);
                  setTimeout(() => setIsCopied(false), 5000);
                }}
              >
                {isCopied ? '🎉 Copied!' : 'Copy'}
              </Button>

              {tokens.map((line, i) => (
                <div {...getLineProps({ line, key: i })} style={style} key={i}>
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} key={key} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
        <div className="absolute top-0 right-0">
          <Confetti active={isCopied} config={config} />
        </div>
      </div>
    </CodeWrapper>
  );
}
