import "./profitbox.css";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { formatToFixed } from "@/utilities/number";
import { useApp } from "@/providers/useApp";
import { getMissionData } from "@/utilities/mission";

import settingIcon from "@/assets/icons/settings.png";
import tokenIcon from "@/assets/icons/token.png";
import warningIcon from "@/assets/icons/warning-circle.svg";

interface ProfitBoxProps {
  className?: string;
}

const ProfitBox = ({ className }: ProfitBoxProps) => {
  const navigate = useNavigate();
  const { missions } = useApp();
  const [reward, setReward] = useState(0);

  useEffect(() => {
    let totalReward = 0;
    missions.map((mission) => {
      const res = getMissionData(mission.id, mission.level);
      if(!res.reward) return;
      totalReward += res.reward;
    });
    setReward(totalReward);
  }, [missions]);

  const handleClickSetting = () => {
    navigate("/setting");
  };
  return (
    <div className={`system-profit-box ${className}`}>
      <div className="system-profit-detail">
        <div>Profit per hour</div>
        <div className="system-profit-status">
          <img src={tokenIcon} alt="Token" />
          <div>+{formatToFixed(reward)}</div>
          <button>
            <img src={warningIcon} alt="Token" />
          </button>
        </div>
      </div>
      <div className="">
        <div className="system-profit-setting-divider"></div>
        <button
          className="system-profit-setting-btn"
          onClick={handleClickSetting}
        >
          <img src={settingIcon} alt="setting" />
        </button>
      </div>
    </div>
  );
};

export default ProfitBox;
