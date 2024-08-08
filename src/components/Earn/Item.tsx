import "./EarnItem.css";
import { formatToFixed } from "@/utilities/number";

import tokenIcon from "@/assets/icons/token.png";
import arrowRightIcon from "@/assets/icons/arrow-right.png";
import checkIcon from "@/assets/icons/check-circle.png";

interface EarnItemProps {
  icon: any;
  title: string;
  coin: number;
  isChecked: boolean;

  className?: string;
  onClick?: () => void;
}

const EarnItem = ({
  icon,
  title,
  coin,
  isChecked,
  className,
  onClick,
  ...props
}: EarnItemProps) => {
  return (
    <div className={`app-earnitem ${className}`} {...props} onClick={onClick}>
      <img src={icon} alt="" width={32} height={32} />
      <div className="item-earn-info">
        <div className="title">{title}</div>
        <div className="coin">
          <img src={tokenIcon} alt="T" />
          &nbsp;
          <span> +{formatToFixed(coin)}</span>
        </div>
      </div>
      <img
        src={isChecked ? checkIcon : arrowRightIcon}
        alt=""
        width={24}
        height={24}
      />
    </div>
  );
};

export default EarnItem;
