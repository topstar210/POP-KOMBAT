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
  const [isRendered, setIsRendered] = useState(isOpen); // Controls if the modal is rendered
  const [isAnimating, setIsAnimating] = useState(false); // Controls animation state
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

      // Delay adding the animation class to ensure the modal is in the DOM first
      const timer = setTimeout(() => {
        setIsAnimating(true); // Trigger the animation
      }, 10); // Small delay to allow rendering
      return () => clearTimeout(timer);
    } else {
      // Delay hiding until after the animation finishes
      const timer = setTimeout(() => {
        setIsRendered(false);
      }, 600); // Match the CSS transition duration
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isRendered) return null;

  return (
    <div className={`app-modal-cover ${isAnimating ? "open" : ""}`} onClick={handleOverlayClick}>
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
