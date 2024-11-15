import { useContext, createContext } from "react";

export interface ToastContextInterface {
  toasts: { id: number; message: string; type: string }[];
  setToasts: React.Dispatch<React.SetStateAction<{ id: number; message: string; type: string }[]>>;
  showToast: (message: string, type: string) => void;
  autoClose: boolean;
  handleAutoCloseChange: () => void;
  autoCloseDuration: number;
  handleDurationChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  setAutoCloseDuration: React.Dispatch<React.SetStateAction<number>>;
  removeToast: (id: number) => void;
  removeAllToasts: () => void;
  positions: Record<string, string>;
  position: string;
  handlePositionChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const toastContext = createContext<ToastContextInterface>({
  toasts: [],
  setToasts: () => {},
  showToast: () => {},
  autoClose: true,
  handleAutoCloseChange: () => {},
  autoCloseDuration: 5,
  handleDurationChange: () => {},
  setAutoCloseDuration: () => {},
  removeToast: () => {},
  removeAllToasts:() => {},
  positions: {},
  position: "",
  handlePositionChange: () => {}
});

export const useToastContext = () => {
  return useContext(toastContext);
};