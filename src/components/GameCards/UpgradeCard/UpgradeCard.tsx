import "./UpgradeCard.css";
import { formatToFixed } from "@/utilities/number";
import { type UpgradeCardIFC } from "@/types/card";

import defaultImg from "@/assets/imgs/mission-image.png";
import tokenIcon from "@/assets/icons/token.png";

interface UpgradeCardProps extends UpgradeCardIFC {
  className?: string;
}

const UpgradeCard = ({
  name,
  level,
  img_link,
  cost,
  reward,
  className,
  ...props
}: UpgradeCardProps) => {
  return (
    <div className={`app-upgcard ${className}`} {...props}>
      <div className="app-upgcard-body">
        <div>
          <img src={defaultImg} alt="" sizes="48px" />
        </div>
        <div>
          <div className="upgcard-title">{name}</div>
          <div className="upgcard-profit-perhour">
            <div className="font-xs">Profit per hour</div>
            <div className="app-upgcard-row">
              <img src={img_link || tokenIcon} alt="" width={14} />
              <span className="font-xs">{formatToFixed(reward)}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="horizontal-divider"></div>
      <div className="app-upgcard-bottom">
        <span>lvl {level}</span>
        <div className="vertical-divider"></div>
        <div className="app-upgcard-row">
          <img src={tokenIcon} alt="" width={12} />
          <span>{formatToFixed(cost)}</span>
        </div>
      </div>
    </div>
  );
};

export default UpgradeCard;
