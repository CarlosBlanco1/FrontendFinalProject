import Toast from "./Toast";
import "./ToastList.css";
import { useRef } from "react";

const ToastList = ({
  data,
  position,
  removeToast,
}: {
  data: { id: number; message: string; type: string }[];
  position: string;
  removeToast: (id: number) => void;
}) => {

  const listRef = useRef(null);

  const sortedData = position.includes("bottom")
    ? [...data].reverse()
    : [...data];

  return (
    sortedData.length > 0 && (
      <div
        className={`toast-list toast-list--${position}`}
        aria-live="assertive"
        ref={listRef}
      >
        {sortedData.map((toast) => (
          <Toast
            key={toast.id}
            message={toast.message}
            type={toast.type}
            onClose={() => removeToast(toast.id)}
          />
        ))}
      </div>
    )
  );
};

export default ToastList;
