import "./EarnPage.css";
import { Box } from "@/components/system";
import EarnItem from "@/components/Earn/Item";

import tokenimg from "@/assets/imgs/token-image.png";

import spotifyIcon from "@/assets/icons/spotify.png";
import calandarIcon from "@/assets/icons/calandar.png";
import xIcon from "@/assets/icons/x.png";
import telegramIcon from "@/assets/icons/telegram.png";
import binanceIcon from "@/assets/icons/binance.png";
import inviteIcon from "@/assets/icons/invite.png";

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
    </div>
  );
};

export default EarnPage;
