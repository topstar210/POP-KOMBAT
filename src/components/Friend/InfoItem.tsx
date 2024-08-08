import "./Friends.css";

import { Item } from "@/components/system";
import { formatToFixed } from "@/utilities/number";

import tokenIcon from "@/assets/icons/token.png";
import userAvatar from "@/assets/imgs/avatar/user1.jfif";

const InfoItem = () => {
  return (
    <Item className="fp-friend-item">
      <div className="fp-friend-info">
        <img
          src={userAvatar}
          className="avatar"
          alt=""
          width={32}
          height={32}
        />
        <div className="">
          <div className="fp-friend-name">Friend's Name</div>
          <div className="fp-friend-level">
            <span>Primium </span>
            <img src={tokenIcon} alt="T" width={10} height={10} />
            <span className="coin">{formatToFixed(8888888)}</span>
          </div>
        </div>
      </div>
      <div className="fp-friend-coin">
        <img src={tokenIcon} alt="T" width={18} height={18} />
        <span> +{formatToFixed(5643215)}</span>
      </div>
    </Item>
  );
};

export default InfoItem;
