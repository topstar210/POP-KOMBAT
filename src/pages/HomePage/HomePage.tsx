import { Box, Avatar, Ranking, ProfitBox } from "@/components/system";
import CountCounter from "@/components/CoinCounter";
import InfoBox from "@/components/InfoBox";

import energyIcon from "@/assets/icons/energyIcon.png"
import boostIcon from "@/assets/icons/boost.png"

const HomePage = () => {
  return (
    <div className="main-page">
      <Box>
        <Avatar username="Test User" url="" />
      </Box>
      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Ranking style={{ width: "105px" }} />
        <ProfitBox />
      </Box>
      <Box className="display-section">
        <div className="display-section-cover">
          <CountCounter value={538507456} />
          <Box
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <InfoBox value={`6500 / 6500`} img={energyIcon} /> 
            <InfoBox value={`Boost`} img={boostIcon} /> 
          </Box>
        </div>
      </Box>
    </div>
  );
};

export default HomePage;
