import "./SplashScreen.css";

import logo from "@/assets/imgs/logo.png";
import telegram from "@/assets/icons/telegram.svg";
import x from "@/assets/icons/x.svg";
import discord from "@/assets/icons/discord.svg";

const SplashScreen = () => {
  return (
    <div className="splash-screen">
      <div className="splash-cover">
        <img src={logo} alt="logo" style={{ marginTop: -100 }} />

        <div className="splash-bottom">
          <p>
            keep up to date <br /> via our official channels
          </p>
          <div className="buttons">
            <img src={telegram} alt="T" />
            <img src={x} alt="X" />
            <img src={discord} alt="D" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
