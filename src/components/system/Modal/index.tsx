import { ReactNode, useEffect, useRef, useState } from "react";
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
  const [isRendered, setIsRendered] = useState(isOpen);
  const modalRef = useRef<HTMLDivElement>(null);

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

    if (isOpen) {
      setIsRendered(true);
    } else {
      // Delay hiding until after the animation finishes
      const timer = setTimeout(() => {
        setIsRendered(false);
      }, 1000); // Match the CSS transition duration
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isRendered) return null;

  return (
    <div className={`app-modal-cover ${isOpen ? "open" : ""}`} onClick={handleOverlayClick}>
      <div
        className={`app-modal ${className} ${isOpen ? "open" : ""}`}
        ref={modalRef}
        {...props}
      >
        <button className="app-modal-close" onClick={closeModal}></button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
