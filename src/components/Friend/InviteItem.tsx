import "./Friends.css";

import { Item } from "@/components/system";
import { formatNum } from "@/utilities/number";

import giftIcon from "@/assets/icons/gift.png";
import tokenIcon from "@/assets/icons/token.png";

interface InviteItemProps {
  title: string;
  coinVal: number;
  onClick?: () => void;
}

const InviteItem = ({ title, coinVal, onClick }: InviteItemProps) => {
  return (
    <Item className="fp-status-item" onClick={onClick}>
      <img src={giftIcon} className="zoom-in" alt="" />
      <div className="fp-status-data">
        <h1>{title}</h1>
        <div>
          <img src={tokenIcon} alt="T" width={18} height={18} />
          &nbsp;
          <span> +{formatNum(coinVal)}</span>&nbsp; for you and a friend
        </div>
      </div>
    </Item>
  );
};

export default InviteItem;
