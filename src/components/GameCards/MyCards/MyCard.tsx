import "./MyCard.css";
import { type MyCardIFC } from "@/types/Cards";
import { formatToFixed } from "@/utilities/number";

import tokenIcon from "@/assets/icons/token.png";

interface MyCardProps extends MyCardIFC {
  className?: string;
}

const MyCard = ({
  className,
  title,
  description,
  img,
  profit_per_hour,
  total,
  ...props
}: MyCardProps) => {
  return (
    <div className={`app-mycard ${className}`} {...props}>
      <div className="app-mycard-card-body">
        <img src={img} className="app-mycard-img" alt="" />
        <div className="app-mycard-title">{title}</div>
        <div className="app-mycard-discription">{description}</div>
        <div className="app-mycard-profit-perhour">
          <div className="font-xs">Profit per hour</div>
          <div className="app-upgcard-row">
            <img src={tokenIcon} alt="" width={14} height={14} />
            <span className="font-xs">{formatToFixed(profit_per_hour)}</span>
          </div>
        </div>
      </div>
      <div className="horizontal-divider"></div>
      <div className="app-mycard-card-footer">
        <span>lvl 15</span>
        <div className="vertical-divider"></div>
        <div className="app-upgcard-row">
          <img src={tokenIcon} alt="" width={16} height={16} />
          <span>{formatToFixed(total)}</span>
        </div>
      </div>
    </div>
  );
};

export default MyCard;
