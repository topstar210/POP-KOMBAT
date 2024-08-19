import { ReactNode, useEffect } from "react";
import "./modal.css";

interface ModalProps {
  className?: string;
  children: ReactNode;
  isOpen: boolean;
  onClose?: () => void;
}

const Modal = ({
  children,
  className,
  isOpen,
  onClose,
  ...props
}: ModalProps) => {
  const closeModal = () => {
    if (onClose) onClose(); // Call the optional close callback if provided
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  useEffect(() => {
    // @ts-ignore
    document.getElementsByClassName("tabbar")[0].style.display = isOpen
      ? "none"
      : "block";
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="app-modal-cover" onClick={handleOverlayClick}>
      <div className={`app-modal ${className}`} {...props}>
        <button className="app-modal-close" onClick={closeModal}></button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
