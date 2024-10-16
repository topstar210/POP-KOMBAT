import { useNavigate } from "react-router-dom";
import { Box, Ranking, ProfitBox } from "@/components/system";
import { MyBalance, InfoBox, TabSection, GameCards } from "@/components";
import { useApp } from "@/providers/useApp";

import energyIcon from "@/assets/icons/energyIcon.png";
import boostIcon from "@/assets/icons/boost.png";

const MinePage = () => {
  const navigate = useNavigate();
  const { gameData, curEenergy, handleSetGameData, handleDecrementCurEnergy } =
    useApp();

  const handleClickBoost = () => {
    navigate("/boost");
  };

  return (
    <>
      <div className="main-page">
        <Box
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "16px"
          }}
        >
          <Ranking
            totalEarning={gameData.totalEarning}
            level={gameData.level}
            className="fade-right"
            style={{ width: "50%" }}
          />
          <ProfitBox className="fade-left" style={{ width: "50%" }} />
        </Box>
        <Box className="display-section">
          <div className="display-section-cover">
            <MyBalance className="fade-in" value={gameData.balance} />

            <GameCards />

            <TabSection
              curEenergy={curEenergy}
              gameData={gameData}
              setBalance={handleSetGameData}
              setDecrementCurEnergy={handleDecrementCurEnergy}
              className="zoom-in"
            />
            <Box
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <InfoBox
                className="fade-right"
                value={`${curEenergy} / ${gameData.energy}`}
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
    </>
  );
};

export default MinePage;
