import "./Toast.css";
import Image from "next/image";


const iconMap: Record<string, JSX.Element> = {
  "success": <Image src="/thumbs-up.svg" alt="thumbs-up" width={24} height={24} />,
  "failure": <Image src="/thumbs-down.svg" alt="thumbs-down" width={24} height={24} />,
};

const ToastComponent = ({
  message,
  type,
  onClose,
}: {
  message: string;
  type: string;
  onClose: () => void;
}) => {
  const toastIcon: JSX.Element = iconMap[type] || null;
  
  return (
    <div className={`d-block toast toast--${type}`} role="alert">
      <div className="toast-message">
        {toastIcon && (
          <div className="icon icon--lg icon--thumb">{toastIcon}</div>
        )}
        <p>{message}</p>
      </div>
      <button className="toast-close-btn" onClick={onClose}>
        <span className="icon">
          <Image src="/close.svg" alt="close" width={24} height={24} />
        </span>
      </button>
    </div>
  );
};

export default ToastComponent;
