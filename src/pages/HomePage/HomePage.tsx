import { Box, Avatar, Ranking, ProfitBox } from "@/components/system";
import CountCounter from "@/components/CoinCounter";

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
        </div>
      </Box>
    </div>
  );
};

export default HomePage;
