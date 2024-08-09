import "./switchbtn.css";

import smile from "@/assets/icons/smile.png";
import annoy from "@/assets/icons/annoy.png";

interface SwitchBtnProps {
  turn: boolean;
  onClick?: () => void;
}

const SwitchBtn = ({ turn, onClick }: SwitchBtnProps) => {
  return (
    <>
      <div
        className={`sys-switch-wrap ${turn ? "rightcontent" : ""}`}
        onClick={onClick}
      >
        <div className="sys-switch-btn">
          <div className={`sys-switch-btn-inner ${turn ? "smile" : "annoy"}`}>
            <img src={turn ? smile : annoy} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SwitchBtn;
