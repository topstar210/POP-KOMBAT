import "./GameCards.css";
import { useState } from "react";
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
  const { missions } = useApp();

  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>("team");

  const handleClickTabItem = (tab: TabInterface) => {
    setActiveTab(tab.id);
  };

  const openMissionData = (modalData: UpgradeCardIFC) => {
    console.log("modalData :::: ", modalData);

    setIsOpenModal(true);
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
                  settedMission.level
                );
              } else {
                missionData = { ...data, level: 0 };
              }

              return (
                <UpgradeCard
                  key={i}
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
            src={defaultImg}
            alt="mission-img"
            className="mission-img"
            width={103}
            height={103}
          />
          <h2>Mission Title</h2>
          <div className="app-mission-des">
            Mission Description Eu orci maecenas nisi arcu sit in praesent
            tempus. Vitae
          </div>
          <div className="token-row">
            <img src={tokenIcon} alt="" width={28} height={28} />
            <span>+{formatNum(1522321)}</span>
          </div>
          <button>Button Text</button>
        </div>
      </Modal>
    </div>
  );
};

export default GameCards;
