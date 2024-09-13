import "./EarnPage.css";
import { useEffect, useState } from "react";
import { Box } from "@/components/system";
import EarnItem from "@/components/Earn/Item";
import { Modal } from "@/components/system";
import { useApp } from "@/providers/useApp";
import { fetchData, postData } from "@/services/apiService";

import tokenimg from "@/assets/imgs/token-image.png";
import spotifyIcon from "@/assets/icons/spotify.png";
import calandarIcon from "@/assets/icons/calandar.png";
import xIcon from "@/assets/icons/x.png";
import telegramIcon from "@/assets/icons/telegram.png";
import binanceIcon from "@/assets/icons/binance.png";
import inviteIcon from "@/assets/icons/invite.png";
import dailyReward from "@/assets/imgs/modal/daily_reward.png";

const dailyRewardData = [
  {
    day: 1,
    dispaly: "500",
    value: 500,
  },
  {
    day: 2,
    dispaly: "1K",
    value: 1000,
  },
  {
    day: 3,
    dispaly: "2.5k",
    value: 2500,
  },
  {
    day: 4,
    dispaly: "5k",
    value: 5000,
  },
  {
    day: 5,
    dispaly: "15k",
    value: 15000,
  },
  {
    day: 6,
    dispaly: "25k",
    value: 25000,
  },
  {
    day: 7,
    dispaly: "100k",
    value: 100000,
  },
  {
    day: 8,
    dispaly: "500k",
    value: 500000,
  },
  {
    day: 9,
    dispaly: "1M",
    value: 1000000,
  },
  {
    day: 10,
    dispaly: "5M",
    value: 5000000,
  },
];

const EarnPage = () => {
  const { initData, gameData, handleSetGameData } = useApp();

  const [openDailyModal, setOpenDailyModal] = useState(
    gameData.isDailyRewardAvailable
  );

  useEffect(() => {
    const loadData = async () => {
      const user = initData?.user;
      const gameRes = await fetchData(`games/${user?.id}`);
      setOpenDailyModal(gameRes.isDailyRewardAvailable);
      handleSetGameData({
        ...gameRes.gameData,
        isDailyRewardAvailable: gameRes.isDailyRewardAvailable,
      });
    };
    loadData();
  }, []);

  const handleClickClaim = async () => {
    if(!gameData.isDailyRewardAvailable) return;

    const user = initData?.user;
    const rewardAmount = dailyRewardData[gameData.consecutiveDays].value ?? 0;

    await postData(`games/claimDailyReward`, {
      userId: user?.id,
      rewardAmount,
    }).then(() => {
      handleSetGameData({
        balance: gameData.balance + rewardAmount,
      });
      setOpenDailyModal(false);
    });
  };

  return (
    <div className="main-page earn-page">
      <Box className="display-section">
        <div className="display-section-cover">
          <div className="er-header">
            <img src={tokenimg} className="fade-down" alt="" width={"50%"} />
            <h1 className="fade-left">Earn More Coins</h1>
          </div>
          <div className="er-list-cointainer">
            <h2>Spotify STreaming</h2>
            <div className="er-list">
              <EarnItem
                icon={spotifyIcon}
                title="Stream 'Eres Mi Sol' on Spotify"
                coin={308880}
                isChecked={false}
              />
              <EarnItem
                icon={spotifyIcon}
                title="Follow the Producers Playlist"
                coin={308880}
                isChecked={true}
              />
            </div>
          </div>
          <div className="er-list-cointainer">
            <h2>Daily Tasks</h2>
            <div className="er-list">
              <EarnItem
                icon={calandarIcon}
                title="Daily Reward"
                coin={dailyRewardData[gameData.consecutiveDays].value}
                isChecked={gameData.isDailyRewardAvailable}
                onClick={() => setOpenDailyModal(true)}
              />
            </div>
          </div>
          <div className="er-list-cointainer">
            <h2>Tasks List</h2>
            <div className="er-list">
              <EarnItem
                icon={telegramIcon}
                title="Join our TG Channel"
                coin={308880}
                isChecked={false}
              />
              <EarnItem
                icon={xIcon}
                title="Follow Producers on X"
                coin={308880}
                isChecked={false}
              />
              <EarnItem
                icon={binanceIcon}
                title="Sign up to Binance"
                coin={308880}
                isChecked={false}
              />
              <EarnItem
                icon={inviteIcon}
                title="Invite a Friend"
                coin={308880}
                isChecked={false}
              />
              <EarnItem
                icon={inviteIcon}
                title="Invite 3 Friends"
                coin={308880}
                isChecked={false}
              />
            </div>
          </div>
        </div>
      </Box>
      <Modal isOpen={openDailyModal} onClose={() => setOpenDailyModal(false)}>
        <div className="app-dailyreward-mcontainer">
          <img
            src={dailyReward}
            alt="daily-img"
            className="daily-img"
            width={103}
            height={103}
          />
          <h2>Daily Reward</h2>
          <p>Earn bonus coins for logging in daily without missing a beat</p>
          <div className="dailyreward-cards">
            {dailyRewardData.map((data, i) => (
              <div
                key={i}
                className={`dailyreward-card ${
                  gameData.consecutiveDays == i
                    ? "available"
                    : gameData.consecutiveDays > i
                    ? "actived"
                    : ""
                } ${
                  gameData.consecutiveDays-1 == i &&
                  !gameData.isDailyRewardAvailable &&
                  "actived"
                }`}
              >
                <div>day {data.day}</div>
                <img src={tokenimg} alt="" width={36} />
                <div>{data.dispaly}</div>
              </div>
            ))}
          </div>
          <button className={`${!gameData.isDailyRewardAvailable && "disabled"}`} onClick={() => handleClickClaim()}>Claim</button>
        </div>
      </Modal>
    </div>
  );
};

export default EarnPage;
