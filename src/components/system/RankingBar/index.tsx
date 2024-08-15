import "./rankingBar.css";
import ProgressBar from "../ProgressBar";
import { getLevelInfo } from "@/utilities/level";
import { useEffect, useState } from "react";
import { type LevelIFC } from "@/types/game";

interface RankingProps {
  level: number;
  className?: string;
  style: {};
}
const Ranking = ({ level, style, className, ...props }: RankingProps) => {
  const [levelData, setLevelData] = useState<LevelIFC | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const res: LevelIFC = await getLevelInfo(level);
      setLevelData(res);
    };
    fetchData();
  }, []);

  return (
    <div className={`system-ranking ${className}`} style={style} {...props}>
      <div className="system-rank-display">
        <div>{levelData?.title} &nbsp; &gt;</div>
        <div>
          {levelData?.current}
          <span> / {levelData?.total}</span>
        </div>
      </div>
      <ProgressBar
        percent={((levelData?.current || 0) * 100) / (levelData?.total || 0)}
      />
    </div>
  );
};

export default Ranking;
