import "./UpgradeCard.css";

import defaultImg from "@/assets/imgs/mission-image.png";
import tokenIcon from "@/assets/icons/token.png";

interface UpgradeCardProps {
  className?: string;
}

const UpgradeCard = ({ className, ...props }: UpgradeCardProps) => {
  return (
    <div className={`app-upgcard ${className}`} {...props}>
      <div className="app-upgcard-body">
        <div>
          <img src={defaultImg} alt="" sizes="48px" />
        </div>
        <div>
          <div className="upgcard-title">Agent</div>
          <div className="upgcard-profit-perhour">
            <div className="font-xs">Profit per hour</div>
            <div className="app-upgcard-row">
              <img src={tokenIcon} alt="" width={10} />
              <span className="font-xs">308.88k</span>
            </div>
          </div>
        </div>
      </div>
      <div className="horizontal-divider"></div>
      <div className="app-upgcard-bottom">
        <span>lvl 15</span>
        <div className="vertical-divider"></div>
        <div className="app-upgcard-row">
          <img src={tokenIcon} alt="" width={12} />
          <span>105.88k</span>
        </div>
      </div>
    </div>
  );
};

export default UpgradeCard;
