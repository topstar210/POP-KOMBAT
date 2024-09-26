import "./Setting.css";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";

import { Box, SwitchBtn } from "@/components/system";
import SettingItem from "@/components/Setting/Item";

const Setting = () => {
  const [isFeedBack, setIsFeedBack] = useState(true);
  // const navigate = useNavigate();
  // const [isAnimation, setIsAnimation] = useState(false);

  // const handleClickLanguage = () => {
  //   navigate("/setting/language");
  // };

  const switchFeedback = () => {
    setIsFeedBack(!isFeedBack);
  };

  // const switchAnimationSetting = () => {
  //   setIsAnimation(!isAnimation);
  // };

  return (
    <div className="main-page">
      <div className="setting-header">
        <h1>Settings</h1>
      </div>
      <Box className="setting-list">
        {/* <SettingItem
          title="Select Language"
          description="English"
          onClick={handleClickLanguage}
        /> */}
        <SettingItem title="Delete Account" />

        <Box>
          <div className="row">
            <span>Haptic Feedback</span>
            <SwitchBtn turn={isFeedBack} onClick={switchFeedback} />
          </div>
          {/* <div className="row">
            <span>Coin Animation</span>
            <SwitchBtn turn={isAnimation} onClick={switchAnimationSetting} />
          </div> */}
        </Box>
      </Box>
    </div>
  );
};

export default Setting;
