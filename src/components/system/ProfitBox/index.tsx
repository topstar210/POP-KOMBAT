import "./profitbox.css";

import settingIcon from "@/assets/icons/settings.png";
import tokenIcon from "@/assets/icons/token.png";
import warningIcon from "@/assets/icons/warning-circle.svg";

interface ProfitBoxProps {}
const ProfitBox = ({ ...props }: ProfitBoxProps) => {
  return (
    <div className="system-profit-box" {...props}>
      <div className="system-profit-detail">
        <div>Profit per hour</div>
        <div className="system-profit-status">
          <img src={tokenIcon} alt="Token" />
          <div>+1.33m</div>
          <button>
            <img src={warningIcon} alt="Token" />
          </button>
        </div>
      </div>
      <div className="">
        <div className="system-profit-setting-divider"></div>
        <button className="system-profit-setting-btn">
          <img src={settingIcon} alt="setting" />
        </button>
      </div>
    </div>
  );
};

export default ProfitBox;
