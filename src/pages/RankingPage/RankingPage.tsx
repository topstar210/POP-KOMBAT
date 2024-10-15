import "./RankingPage.css";

import { ProgressBar } from "@/components/system";

import LvlImg from "../../assets/imgs/levels/1.png"
import leftIcon from "../../assets/icons/icon-left.svg"
import rightIcon from "../../assets/icons/icon-right.svg"
import tokenIcon from "../../assets/icons/icon-token.svg"

const RankingPage = () => {
  return (
    <div className="main-page ranking-page">
      <div className="rk-back"> &lt; back</div>
      <div className="rk-level-avatar">
        <button><img src={leftIcon} alt="<" /></button>
        <img src={LvlImg} width={241} height={241} alt="lvl" />
        <button><img src={rightIcon} alt=">" /></button>
      </div>
      <div className="rk-info">
        <div className="lvl-from">from <img src={tokenIcon} width={19} alt="" /> 0</div>
        <div className="lvl-title">Fresh Artist</div>
        <div className="lvl-progress">
          <ProgressBar
            percent={30}
            style={{width: '80%', height: '21px', margin:'0 auto'}}
          />
          <div className="lvl-curr">current / 5000</div>
        </div>
      </div>
    </div>
  )
}

export default RankingPage;