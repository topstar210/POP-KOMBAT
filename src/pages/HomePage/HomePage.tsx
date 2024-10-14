import "./HomePage.css";
import { useNavigate } from "react-router-dom";

import { Box, Avatar, Ranking, ProfitBox, Modal } from "@/components/system";
import { MyBalance, InfoBox, TabSection } from "@/components";
import { useApp } from "@/providers/useApp";
import { formatToFixed } from "@/utilities/number";

import energyIcon from "@/assets/icons/icon-energy.svg";
import boostIcon from "@/assets/icons/icon-boost.png";
import binanceImg from "@/assets/icons/icon-blast.svg";
import tokenImg from "@/assets/icons/icon-token.svg";

const HomePage = () => {
	const navigate = useNavigate();
	const {
		initData: initData,
		gameData,
		curEenergy,
		handleSetGameData,
		handleDecrementCurEnergy,
		showTotalEarning,
		setShowTotalEarning
	} = useApp();
	const userData = initData.user;

	const handleClickBoost = () => {
		navigate("/boost");
	};

	return (
		<>
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
						gap: "16px"
					}}
				>
					<Ranking
						level={gameData.level}
						className="fade-right"
						style={{ width: "50%" }}
					/>
					<ProfitBox className="fade-left" style={{ width: "50%" }} />
				</Box>
				<Box className="display-section">
					<div className="display-section-cover">
						<div className="display-section-container">
							<MyBalance className="fade-in" value={gameData.balance} />
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
									alignItems: "center"
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
					</div>
				</Box>
				<Modal
					isOpen={showTotalEarning}
					onClose={() => setShowTotalEarning(false)}
				>
					<div className="app-earning-modal">
						<img
							src={binanceImg}
							alt="b-img"
							className="b-img"
							width={92}
							height={92}
						/>
						<div className="totalearning">
							<img src={tokenImg} width={40} alt="" />
							{formatToFixed(gameData.totalEarning)}
						</div>
						<p>Your team has been spreading the word while you were gone</p>
						<button onClick={() => setShowTotalEarning(false)}>
							Thank you!
						</button>
					</div>
				</Modal>
			</div>
		</>
	);
};

export default HomePage;
