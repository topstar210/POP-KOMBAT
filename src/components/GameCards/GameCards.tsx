import "./GameCards.css";
import { useState } from "react";
import toast from "react-simple-toasts";
import { Tap, Modal } from "@/components/system";
import { type Tab as TabInterface } from "@/components/system/Tab";
import { type UpgradeCardIFC } from "@/types/card";
import { useApp } from "@/providers/useApp";
import { getMissionData } from "@/utilities/mission";
import { formatNum } from "@/utilities/number";

import UpgradeCard from "./UpgradeCard/UpgradeCard";
import SpecialList from "./SpecialList";

import { mineData } from "@/data/mine";

import defaultImg from "@/assets/imgs/mission-image.png";
import tokenIcon from "@/assets/imgs/token-image.png";

interface GameCardsProps {
  className?: string;
}

const categories: TabInterface[] = [
  {
    id: "team",
    name: "Team",
  },
  {
    id: "equipment",
    name: "Equipment",
  },
  {
    id: "promotion",
    name: "Promotion",
  },
  {
    id: "live_shows",
    name: "Live Shows",
  },
  {
    id: "special",
    name: "Special",
  },
];

const GameCards = ({ className, ...props }: GameCardsProps) => {
  const { missions, handleSetMission, gameData } = useApp();

  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>("team");
  const [mission, setMission] = useState<UpgradeCardIFC | null>(null);

  const handleClickTabItem = (tab: TabInterface) => {
    setActiveTab(tab.id);
  };

  const openMissionData = (modalData: UpgradeCardIFC) => {
    setMission(modalData);
    setIsOpenModal(true);
  };

  const handleClickSetMission = (data: any) => {
    if (data.cost > gameData.balance) {
      toast("You don't have enough balance", {
        className: "app-toast",
        position: "top-center",
      });
      setIsOpenModal(false);
      return true;
    }
    try {
      handleSetMission({
        id: data.id || "",
        level: data.level + 1,
      });
      toast(`${data.name} level was set to  ${data.level + 1}`, {
        className: "app-toast",
        position: "top-center",
      });
    } catch (error) {}
    setIsOpenModal(false);
  };

  return (
    <div className={`${className}`} {...props}>
      <Tap
        menu={categories}
        active={activeTab}
        handleClickTab={handleClickTabItem}
      >
        {mineData[activeTab] && (
          <div className="card-group">
            {mineData[activeTab].map((data: UpgradeCardIFC, i: any) => {
              let missionData;
              const settedMission = missions.find(
                (mission) => mission.id === data.id
              );
              if (settedMission) {
                missionData = getMissionData(
                  settedMission.id,
                  settedMission.level + 1
                );
                missionData.level -= 1;
              } else {
                missionData = { ...data, level: 0 };
              }

              return (
                <UpgradeCard
                  key={i}
                  id={missionData.id}
                  name={missionData.name}
                  img_link={missionData.img_link}
                  cost={missionData.cost}
                  level={missionData.level}
                  reward={missionData.reward}
                  onClick={() => openMissionData(missionData)}
                />
              );
            })}
          </div>
        )}

        {activeTab === "special" && <SpecialList />}
      </Tap>

      <Modal isOpen={isOpenModal} onClose={() => setIsOpenModal(false)}>
        <div className="app-mission-section">
          <img
            src={mission?.id ? `./images/card/${mission.id}.png` : defaultImg}
            alt="mission-img"
            className="mission-img"
            width={103}
            height={103}
          />
          <h2>{mission?.name}</h2>
          <div className="app-mission-des">
            <p>{mission?.description}</p>
            <div className="token-row">
              <span>Profit per hour &nbsp;&nbsp;</span>
              <img src={tokenIcon} alt="" width={14} height={14} />
              <span>+{formatNum(mission?.reward ?? 0)}</span>
            </div>
          </div>
          <div className="token-row">
            <img src={tokenIcon} alt="" width={28} height={28} />
            <span>{formatNum(mission?.cost ?? 0)}</span>
          </div>
          <button onClick={() => handleClickSetMission(mission)}>
            Go ahead
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default GameCards;
