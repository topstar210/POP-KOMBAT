import "./EarnPage.css";
import { Box } from "@/components/system";
import EarnItem from "@/components/Earn/Item";
import { Modal } from "@/components/system";

import tokenimg from "@/assets/imgs/token-image.png";
import spotifyIcon from "@/assets/icons/spotify.png";
import calandarIcon from "@/assets/icons/calandar.png";
import xIcon from "@/assets/icons/x.png";
import telegramIcon from "@/assets/icons/telegram.png";
import binanceIcon from "@/assets/icons/binance.png";
import inviteIcon from "@/assets/icons/invite.png";
import dailyReward from "@/assets/imgs/modal/daily_reward.png";

const EarnPage = () => {
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
                coin={308880}
                isChecked={false}
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
      <Modal isOpen={false} onClose={() => {}}>
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
            <div className="dailyreward-card actived">
              <div>day 1</div>
              <img src={tokenimg} alt="" width={36} />
              <div>500</div>
            </div>
            <div className="dailyreward-card available">
              <div>day 2</div>
              <img src={tokenimg} alt="" width={36} />
              <div>1k</div>
            </div>
            <div className="dailyreward-card">
              <div>day 3</div>
              <img src={tokenimg} alt="" width={36} />
              <div>2.5k</div>
            </div>
            <div className="dailyreward-card">
              <div>day 4</div>
              <img src={tokenimg} alt="" width={36} />
              <div>5k</div>
            </div>
            <div className="dailyreward-card">
              <div>day 5</div>
              <img src={tokenimg} alt="" width={36} />
              <div>15k</div>
            </div>
            <div className="dailyreward-card">
              <div>day 6</div>
              <img src={tokenimg} alt="" width={36} />
              <div>25k</div>
            </div>
            <div className="dailyreward-card">
              <div>day 7</div>
              <img src={tokenimg} alt="" width={36} />
              <div>100k</div>
            </div>
            <div className="dailyreward-card">
              <div>day 8</div>
              <img src={tokenimg} alt="" width={36} />
              <div>500k</div>
            </div>
            <div className="dailyreward-card">
              <div>day 9</div>
              <img src={tokenimg} alt="" width={36} />
              <div>1M</div>
            </div>
            <div className="dailyreward-card">
              <div>day 10</div>
              <img src={tokenimg} alt="" width={36} />
              <div>5M</div>
            </div>
          </div>
          <button onClick={() => {}}>Claim</button>
        </div>
      </Modal>
    </div>
  );
};

export default EarnPage;
