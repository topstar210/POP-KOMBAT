import "./rankingBar.css";
import ProgressBar from "../ProgressBar";

interface RankingProps {
  style: {};
}
const Ranking = ({ style, ...props }: RankingProps) => {
  return (
    <div className="system-ranking" style={style} {...props}>
      <div className="system-rank-display">
        <div>Legendary &gt;</div>
        <div>
          7<span> / 11</span>
        </div>
      </div>
      <ProgressBar percent={60} />
    </div>
  );
};

export default Ranking;
