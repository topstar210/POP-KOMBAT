import { Box } from "@/components/system";
import { MyBalance } from "@/components";

const EarnPage = () => {
  return (
    <div className="main-page">
      <Box className="er-header">
        <div className="er-title">Your Balance</div>
        <div className="er-mybalance">
          <MyBalance className="fade-in" value={538507456} />
        </div>
      </Box>
    </div>
  );
};

export default EarnPage;
