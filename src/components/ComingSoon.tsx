import tokenImg from "@/assets/imgs/token-image.png";

const ComingSoon = () => {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        background: "url('./splash-bg.png')",
        backgroundSize: "cover",
      }}
    >
      <div
        style={{
          background: "#000000B5",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <img src={tokenImg} alt="" />
          <div
            className="luckiest"
            style={{
              fontSize: "33.3px",
              marginTop: "10px",
              textShadow: "1px 2px 0px #101010",
            }}
          >
            Coming Soon
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
