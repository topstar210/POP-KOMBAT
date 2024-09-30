import "./profitbox.css";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { formatToFixed } from "@/utilities/number";
import { useApp } from "@/providers/useApp";
import { getMissionData } from "@/utilities/mission";
import { Modal } from "@/components/system";
import { formatNum } from "@/utilities/number";

import settingIcon from "@/assets/icons/settings.png";
import tokenIcon from "@/assets/icons/token.png";

interface ProfitBoxProps {
  className?: string;
}

const ProfitBox = ({ className }: ProfitBoxProps) => {
  const navigate = useNavigate();
  const {
    missions,
    isProfitPerH,
    handleSetIsProfitPerH,
    gameData,
    handleSetGameData,
  } = useApp();
  const [reward, setReward] = useState(0);

  useEffect(() => {
    let totalReward = 0;
    missions.map((mission) => {
      const res = getMissionData(mission.id, mission.level);
      if (!res.reward) return;
      totalReward += res.reward;
    });
    setReward(totalReward);
  }, [missions]);

  const handleClickSetting = () => {
    navigate("/setting");
  };

  const handleClickClaim = () => {
    handleSetGameData({
      balance: gameData.balance + reward,
    });
    handleSetIsProfitPerH(false);
  };
  return (
    <>
      <div className={`system-profit-box ${className}`}>
        <div className="system-profit-detail">
          <div>Pops per hour</div>
          <div className="system-profit-status">
            <img src={tokenIcon} alt="Token" width={16} height={16} />
            <div>+{formatToFixed(reward)}</div>
          </div>
        </div>
        <div className="system-profit-setting">
          <div className="system-profit-setting-divider"></div>
          <button
            className="system-profit-setting-btn"
            onClick={handleClickSetting}
          >
            <img src={settingIcon} alt="setting" />
          </button>
        </div>
      </div>

      <Modal
        isOpen={isProfitPerH && reward > 0}
        onClose={() => handleSetIsProfitPerH(false)}
      >
        <div className="app-profitperhour-modal">
          <p>You 've got {formatNum(reward ?? 0)} from Your Pops per hour</p>
          <div className="token-row">
            <img src={tokenIcon} alt="" width={28} height={28} />
            <span>+{formatNum(reward ?? 0)}</span>
          </div>
          <button onClick={() => handleClickClaim()}>Claim</button>
        </div>
      </Modal>
    </>
  );
};

export default ProfitBox;
