import "./Setting.css";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";

import { Box, SwitchBtn, Modal } from "@/components/system";
import SettingItem from "@/components/Setting/Item";

const Setting = () => {
  const [isOpenDelete, setIsOpenDelete] = useState(false);
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

  const handleClickDeleteAcc = () => {
    
  }

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
        <SettingItem title="Delete Account" onClick={() => setIsOpenDelete(true)} />

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
      <Modal isOpen={isOpenDelete} onClose={() => { setIsOpenDelete(false) }}>
        <div className="app-delete-acc">
          <h1>Are you sure you want to delete your account?</h1>
          <p>A ll your data, including game progress, will be permanently deleted. This action cannot be undone</p>
          <button className="app-delete" onClick={handleClickDeleteAcc}>Delete Account</button>
          <button className="app-delete-cancel" onClick={() => { setIsOpenDelete(false) }}>Cancel</button>
        </div>
      </Modal>
    </div>
  );
};

export default Setting;
