import "./BoostPage.css";

import { Box } from "@/components/system";
import { MyBalance } from "@/components";
import { formatToFixed } from "@/utilities/number";

import energyIcon from "@/assets/icons/energyIcon.png";
import arrowFigerUpIcon from "@/assets/icons/arrowFigerUp.png";
import lightningIcon from "@/assets/icons/lightning.png";
import tokenIcon from "@/assets/icons/token.png";
import arrowRightIcon from "@/assets/icons/arrow-right.png";

import { useApp } from "@/providers/useApp";

const BoostPage = () => {
  const { gameData } = useApp();

  return (
    <div className="main-page">
      <Box className="bp-header">
        <h1 className="bp-title fade-down">Your Balance</h1>
        <div className="bp-mybalance">
          <MyBalance className="fade-in" value={gameData.balance} />
        </div>
      </Box>
      <Box className="bp-boosters">
        <h2>Free Daily Boosterss</h2>
        <div className="bp-daily-booster-list">
          <div className="app-boostitem">
            <img src={energyIcon} alt="" width={32} height={32} />
            <div className="app-boostitem-info">
              <div className="title">Energy Refill</div>
              <div className="description">6/6 Available</div>
            </div>
            <img src={arrowRightIcon} alt="" width={24} height={24} />
          </div>
        </div>
      </Box>
      <Box className="bp-boosters">
        <h2>Boosterss</h2>
        <div className="bp-booster-list">
          <div className="app-boostitem" style={{ height: 56 }}>
            <img src={arrowFigerUpIcon} alt="" width={32} height={32} />
            <div className="app-boosters">
              <div>
                <div className="title">Multitap</div>
                <div className="coin">
                  <img src={tokenIcon} alt="T" />
                  &nbsp;
                  <span> +{formatToFixed(123456)}</span>&nbsp; lvl 10
                </div>
              </div>
              <div>lvl 11</div>
            </div>
            <img src={arrowRightIcon} alt="" width={24} height={24} />
          </div>
          <div className="app-boostitem" style={{ height: 56 }}>
            <img src={lightningIcon} alt="" width={32} height={32} />
            <div className="app-boosters">
              <div>
                <div className="title">Energy Limit</div>
                <div className="coin">
                  <img src={tokenIcon} alt="T" />
                  &nbsp;
                  <span> +{formatToFixed(123456)}</span>&nbsp; lvl 10
                </div>
              </div>
              <div>lvl 11</div>
            </div>
            <img src={arrowRightIcon} alt="" width={24} height={24} />
          </div>
        </div>
      </Box>
    </div>
  );
};

export default BoostPage;
