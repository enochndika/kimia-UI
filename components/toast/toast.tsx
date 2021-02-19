import ReactDOM from "react-dom";
import React, { ReactNode } from "react";
import ToastContainer from "./toastContainer";

const triggerToast = (messageType, message, placement, duration) => {
  const validMessageTypes = ["success", "info", "danger", "warning"];
  if (!validMessageTypes.includes(messageType)) {
    throw Error("Invalid Toast message type");
  }
  ReactDOM.render(
    <ToastContainer
      messageType={messageType}
      duration={duration ? duration : 3000}
      placement={placement}
    >
      {message}
    </ToastContainer>,
    document.getElementById("toast")
  );
};

const toast = {
  success: (message: ReactNode, placement: string, duration?: number) => {
    triggerToast("success", message, placement, duration);
  },
  info: (message: ReactNode, placement: string, duration?: number) => {
    triggerToast("info", message, placement, duration);
  },
  danger: (message: ReactNode, placement: string, duration?: number) => {
    triggerToast("danger", message, placement, duration);
  },
  warning: (message: ReactNode, placement: string, duration?: number) => {
    triggerToast("warning", message, placement, duration);
  },
};

export default toast;
