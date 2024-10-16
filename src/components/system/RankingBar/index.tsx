import "./rankingBar.css";
import { useNavigate, useLocation } from "react-router-dom";
import ProgressBar from "../ProgressBar";
import { getLevelInfo } from "@/utilities/level";
import { useEffect, useState } from "react";
import { type LevelIFC } from "@/types/game";

interface RankingProps {
	totalEarning: number;
	level: number;
	className?: string;
	style: {};
}
const Ranking = ({ level, totalEarning, style, className }: RankingProps) => {
	const navigate = useNavigate();
	const location = useLocation();
	const [levelData, setLevelData] = useState<LevelIFC | null>(null);
	const [progressToNext, setProgressToNext] = useState<number>(0);

	useEffect(() => {
		const currLvl: LevelIFC = getLevelInfo(level);
		const nextLvl: LevelIFC = getLevelInfo(level + 1);
		const currToEarning = totalEarning - currLvl.balance;
		const currToNext = nextLvl.balance - currLvl.balance;
		setProgressToNext(currToEarning * 100 / currToNext);
		setLevelData(currLvl);
	}, [level]);

	const handleClickRanking = () => {
		navigate(`/levels/ranking?path=${location.pathname}`);
	}

	return (
		<div className={`system-ranking ${className}`} style={style} onClick={handleClickRanking}>
			<div className="system-rank-display">
				<div>{levelData?.title} &nbsp; &gt;</div>
				<div>
					{levelData?.current}
					<span> / {levelData?.length}</span>
				</div>
			</div>
			<ProgressBar
				percent={progressToNext}
			/>
		</div>
	);
};

export default Ranking;
