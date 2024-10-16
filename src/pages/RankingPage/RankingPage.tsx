import "./RankingPage.css";

import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ProgressBar } from "@/components/system";
import { useApp } from "@/providers/useApp";
import { getLevelInfo } from "@/utilities/level";
import { formatToFixed, formatNum } from "@/utilities/number";
import { levels } from "@/data/level";

import LvlImg from "../../assets/imgs/levels/1.png"
import leftIcon from "../../assets/icons/icon-left.svg"
import rightIcon from "../../assets/icons/icon-right.svg"
import tokenIcon from "../../assets/icons/icon-token.svg"

const RankingPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const backPath = searchParams.get('path');
  const { gameData } = useApp();
  const [userLvl, setUserLvl] = useState(gameData.level)

  const lvlData = getLevelInfo(userLvl);
  const nextLvlData = getLevelInfo(userLvl + 1);

  const handleClickBack = () => {
    navigate(backPath ?? "/home")
  }

  const handleClickPreviousLvl = () => {
    userLvl > 0 ? setUserLvl(userLvl - 1) : 0;
  }
  console.log(levels.length)
  const handleClickNextLvl = () => {
    userLvl < levels.length - 1 ? setUserLvl(userLvl + 1) : levels.length - 1;
  }

  return (
    <div className="main-page ranking-page">
      <div className="rk-back" onClick={handleClickBack}> &lt; back</div>
      <div className="rk-level-avatar">
        <button onClick={handleClickPreviousLvl}><img src={leftIcon} alt="<" /></button>
        <img src={LvlImg} width={241} height={241} alt="lvl" />
        <button onClick={handleClickNextLvl}><img src={rightIcon} alt=">" /></button>
      </div>
      <div className="rk-info">
        <div className="lvl-from">from <img src={tokenIcon} width={19} alt="" /> {lvlData.balance <= 1000000 ? formatNum(lvlData.balance) : formatToFixed(lvlData.balance)}</div>
        <div className="lvl-title">{lvlData.title}</div>
        <div className="lvl-progress">
          <ProgressBar
            percent={gameData.totalEarning > nextLvlData.balance ? 100 : userLvl > gameData.level ? 0 : gameData.totalEarning * 100 / nextLvlData.balance}
            style={{ width: '80%', height: '21px', margin: '0 auto' }}
          />
          <div className="lvl-curr">{formatNum(gameData.totalEarning)} / {nextLvlData.balance <= 1000000 ? formatNum(nextLvlData.balance) : formatToFixed(nextLvlData.balance)}</div>
        </div>
      </div>
    </div>
  )
}

export default RankingPage;