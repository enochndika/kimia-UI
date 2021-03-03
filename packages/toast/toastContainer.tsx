import React, { useState, useEffect, ReactNode, useCallback } from 'react';
import ReactDOM from 'react-dom';

interface MessageType {
  messageType: 'success' | 'info' | 'danger' | 'warning';
}

interface ToastContainerProps extends MessageType {
  children: ReactNode;
  placement: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';
  duration: number;
}
const ToastContainer = ({
  children,
  placement,
  messageType,
  duration,
}: ToastContainerProps) => {
  const [closeTimeout, setCloseTimeout] = useState<any>(0);

  useEffect(() => {
    beginCloseTimeout();
  }, []);

  const closeSnackBar = () => {
    clearTimeout(closeTimeout);
    ReactDOM.unmountComponentAtNode(document.getElementById('toast'));
  };

  const beginCloseTimeout = useCallback(() => {
    if (duration) {
      const timeout = setTimeout(() => closeSnackBar(), duration);
      setCloseTimeout(timeout);
    }
  }, []);

  const className = `${messageTypes[messageType]} ${
    placement ? placements[placement] : placements.topRight
  } flex fixed bg-white shadow-lg rounded text-sm py-3 z-10 px-4 border-l-4`;

  return (
    <div
      className={className}
      onMouseEnter={() => clearTimeout(closeTimeout)}
      onMouseLeave={() => beginCloseTimeout()}
    >
      <div className="pr-1">
        <IconContainer messageType={messageType} />
      </div>
      {children}
    </div>
  );
};

/* The position of the toast*/
const placements = {
  topLeft: 'animate-left top-6 left-4',
  topRight: 'animate-right top-6 right-4',
  bottomLeft: 'animate-left bottom-6 left-4',
  bottomRight: 'animate-right bottom-6 right-4',
};

/* Border color according to toast variant*/
const messageTypes = {
  success: 'border-green-600',
  info: 'border-blue-700',
  danger: 'border-red-500',
  warning: 'border-yellow-400',
};

/* Display icon according to toast variant*/
const IconContainer = ({ messageType }: MessageType) => {
  switch (messageType) {
    case 'success':
      return <SuccessIcon />;
    case 'info':
      return <InfoIcon />;
    case 'warning':
      return <WarningIcon />;
    case 'danger':
      return <DangerIcon />;
    default:
      throw Error('Message Type invalid');
  }
};

/* Icons */
const InfoIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width={18}
    height={18}
  >
    <path
      fill="#1d4ed8"
      d="M504.1,256C504.1,119,393,7.9,256,7.9C119,7.9,7.9,119,7.9,256C7.9,393,119,504.1,256,504.1C393,504.1,504.1,393,504.1,256z"
    />
    <path
      fill="#FFF"
      d="M323.2 367.5c-1.4-2-4-2.8-6.3-1.7-24.6 11.6-52.5 23.9-58 25-.1-.1-.4-.3-.6-.7-.7-1-1.1-2.3-1.1-4 0-13.9 10.5-56.2 31.2-125.7 17.5-58.4 19.5-70.5 19.5-74.5 0-6.2-2.4-11.4-6.9-15.1-4.3-3.5-10.2-5.3-17.7-5.3-12.5 0-26.9 4.7-44.1 14.5-16.7 9.4-35.4 25.4-55.4 47.5-1.6 1.7-1.7 4.3-.4 6.2 1.3 1.9 3.8 2.6 6 1.8 7-2.9 42.4-17.4 47.6-20.6 4.2-2.6 7.9-4 10.9-4 .1 0 .2 0 .3 0 0 .2.1.5.1.9 0 3-.6 6.7-1.9 10.7-30.1 97.6-44.8 157.5-44.8 183 0 9 2.5 16.2 7.4 21.5 5 5.4 11.8 8.1 20.1 8.1 8.9 0 19.7-3.7 33.1-11.4 12.9-7.4 32.7-23.7 60.4-49.7C324.3 372.2 324.6 369.5 323.2 367.5zM322.2 84.6c-4.9-5-11.2-7.6-18.7-7.6-9.3 0-17.5 3.7-24.2 11-6.6 7.2-9.9 15.9-9.9 26.1 0 8 2.5 14.7 7.3 19.8 4.9 5.2 11.1 7.8 18.5 7.8 9 0 17-3.9 24-11.6 6.9-7.6 10.4-16.4 10.4-26.4C329.6 96 327.1 89.6 322.2 84.6z"
    />
  </svg>
);

const SuccessIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    width={18}
    height={18}
  >
    <linearGradient
      id="I9GV0SozQFknxHSR6DCx5a"
      x1="9.858"
      x2="38.142"
      y1="9.858"
      y2="38.142"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset="0" stopColor="#21ad64" />
      <stop offset="1" stopColor="#088242" />
    </linearGradient>
    <path
      fill="url(#I9GV0SozQFknxHSR6DCx5a)"
      d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"
    />
    <path
      d="M32.172,16.172L22,26.344l-5.172-5.172c-0.781-0.781-2.047-0.781-2.828,0l-1.414,1.414	c-0.781,0.781-0.781,2.047,0,2.828l8,8c0.781,0.781,2.047,0.781,2.828,0l13-13c0.781-0.781,0.781-2.047,0-2.828L35,16.172	C34.219,15.391,32.953,15.391,32.172,16.172z"
      opacity=".05"
    />
    <path
      d="M20.939,33.061l-8-8c-0.586-0.586-0.586-1.536,0-2.121l1.414-1.414c0.586-0.586,1.536-0.586,2.121,0	L22,27.051l10.525-10.525c0.586-0.586,1.536-0.586,2.121,0l1.414,1.414c0.586,0.586,0.586,1.536,0,2.121l-13,13	C22.475,33.646,21.525,33.646,20.939,33.061z"
      opacity=".07"
    />
    <path
      fill="#fff"
      d="M21.293,32.707l-8-8c-0.391-0.391-0.391-1.024,0-1.414l1.414-1.414c0.391-0.391,1.024-0.391,1.414,0	L22,27.758l10.879-10.879c0.391-0.391,1.024-0.391,1.414,0l1.414,1.414c0.391,0.391,0.391,1.024,0,1.414l-13,13	C22.317,33.098,21.683,33.098,21.293,32.707z"
    />
  </svg>
);

const DangerIcon = () => (
  <svg
    fill="#EF4444"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="18px"
    height="18px"
  >
    <path d="M12,2C6.47,2,2,6.47,2,12s4.47,10,10,10s10-4.47,10-10S17.53,2,12,2z M17,15.59L15.59,17L12,13.41L8.41,17L7,15.59L10.59,12L7,8.41L8.41,7L12,10.59L15.59,7L17,8.41L13.41,12L17,15.59z" />
  </svg>
);

const WarningIcon = () => (
  <svg
    fill="#FBBF24"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="18px"
    height="18px"
  >
    <path d="M12,2C6.477,2,2,6.477,2,12s4.477,10,10,10s10-4.477,10-10S17.523,2,12,2z M13,17h-2v-6h2V17z M13,9h-2V7h2V9z" />
  </svg>
);

export default ToastContainer;
