import { Box, Ranking, ProfitBox } from "@/components/system";
import { MyBalance, InfoBox, TabSection, GameCards } from "@/components";
import { useApp } from "@/providers/useApp";

import energyIcon from "@/assets/icons/energyIcon.png";
import boostIcon from "@/assets/icons/boost.png";

const MinePage = () => {
  const { gameData, curEenergy, handleSetGameData, handleDecrementCurEnergy } =
    useApp();

  return (
    <div className="main-page">
      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Ranking
          level={gameData.level}
          className="fade-right"
          style={{ width: "105px" }}
        />
        <ProfitBox className="fade-left" />
      </Box>
      <Box className="display-section">
        <div className="display-section-cover">
          <MyBalance className="fade-in" value={538507456} />

          <GameCards />

          <TabSection
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
            <InfoBox className="fade-left" value={`Boost`} img={boostIcon} />
          </Box>
        </div>
      </Box>
    </div>
  );
};

export default MinePage;
