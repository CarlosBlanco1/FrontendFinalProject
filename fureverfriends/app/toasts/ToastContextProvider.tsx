import React, { useState } from "react";
import { toastContext } from "./useToastContext";

const ToastContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [toasts, setToasts] = useState<
    { id: number; message: string; type: string }[]
  >([]);
  const [autoClose, setAutoClose] = useState(true);
  const [autoCloseDuration, setAutoCloseDuration] = useState(5);
  const [position, setPosition] = useState("top-right");
  const positions = {
    "top-right": "Top-right",
    "top-left": "Top-left",
    "bottom-right": "Bottom-right",
    "bottom-left": "Bottom-left",
  };

  const removeToast = (id: number) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };
  
  const showToast = (message: string, type: string) => {
    const toast = {
      id: Date.now(),
      message,
      type,
    };

    setToasts((prevToasts) => [...prevToasts, toast]);

    if (autoClose) {
      setTimeout(() => {
        removeToast(toast.id);
      }, autoCloseDuration * 1000);
    }
  };

  const removeAllToasts = () =>
  {
    setToasts([])
  }

  const handleAutoCloseChange = () => {
    setAutoClose((prevAutoClose) => !prevAutoClose);
    removeAllToasts();
  };

  const handleDurationChange = (event : React.ChangeEvent<HTMLInputElement>) => {
    setAutoCloseDuration(Number(event.target.value));
  };

  const handlePositionChange = (event : React.ChangeEvent<HTMLSelectElement>) => {
    setPosition(event.target.value);
  };

  return (
    <>
      <toastContext.Provider
        value={{
          toasts,
          setToasts,
          showToast,
          autoClose,
          handleAutoCloseChange,
          autoCloseDuration,
          handleDurationChange,
          setAutoCloseDuration,
          removeToast,
          removeAllToasts,
          positions,
          position,
          handlePositionChange,
        }}
      >
        {children}
      </toastContext.Provider>
    </>
  );
};

export default ToastContextProvider;
