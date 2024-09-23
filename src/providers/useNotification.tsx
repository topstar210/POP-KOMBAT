import successIcon from "@/assets/icons/success.png";
import closeIcon from "@/assets/icons/close-solid.png";
import toast from "react-simple-toasts";

export const useNotification = () => {
  const notification = (message: string) => {
    toast(
      <div className="app-toast-container">
        <img src={successIcon} width={18} height={18} alt="" />
        {message}
        <img
          src={closeIcon}
          width={14}
          height={14}
          alt=""
          className="app-toast-close-btn"
        />
      </div>,
      {
        className: "app-toast",
        position: "top-center",
        clickClosable: true,
      }
    );
  };
  return {
    notification,
  };
};