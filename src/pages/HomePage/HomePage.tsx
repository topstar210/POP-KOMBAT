import { Box, Avatar, Ranking, ProfitBox } from "@/components/system";

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
        <Ranking />
        <ProfitBox />
      </Box>
    </div>
  );
};

export default HomePage;
