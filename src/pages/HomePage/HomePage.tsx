import { useNavigate } from "react-router-dom";

import { Box, Avatar, Ranking, ProfitBox } from "@/components/system";
import { MyBalance, InfoBox, TabSection } from "@/components";
import { useApp } from "@/providers/useApp";

import energyIcon from "@/assets/icons/energyIcon.png";
import boostIcon from "@/assets/icons/boost.png";

const HomePage = () => {
  const navigate = useNavigate();
  const { initData: initData, gameData } = useApp();
  const userData = initData.user;

  const handleClickBoost = () => {
    navigate("/boost");
  };

  return (
    <div className="main-page">
      <Box className="fade-right">
        <Avatar
          username={`${userData?.firstName} ${userData?.lastName}`}
          url=""
        />
      </Box>
      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Ranking level={gameData.level} className="fade-right" style={{ width: "105px" }} />
        <ProfitBox className="fade-left" />
      </Box>
      <Box className="display-section">
        <div className="display-section-cover">
          <MyBalance className="fade-in" value={gameData.balance} />
          <TabSection className="zoom-in" />
          <Box
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <InfoBox
              className="fade-right"
              value={`${gameData.energy} / ${gameData.energy}`}
              img={energyIcon}
            />
            <InfoBox
              className="fade-left"
              value={`Boost`}
              img={boostIcon}
              onClick={handleClickBoost}
            />
          </Box>
        </div>
      </Box>
    </div>
  );
};

export default HomePage;
