import "./GameCards.css";
import { useState } from "react";
import { Tap, Modal } from "@/components/system";
import { type Tab as TabInterface } from "@/components/system/Tab";
import { type UpgradeCardIFC } from "@/types/card";
import { useApp } from "@/providers/useApp";
import { getMissionData } from "@/utilities/mission";

import UpgradeCard from "./UpgradeCard/UpgradeCard";
import SpecialList from "./SpecialList";

import { mineData } from "@/data/mine";

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

  const openMissionData = () => {
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
                  onClick={openMissionData}
                />
              );
            })}
          </div>
        )}

        {activeTab === "special" && <SpecialList />}
      </Tap>

      <Modal isOpen={isOpenModal} onClose={() => setIsOpenModal(false)}>
        asdf
      </Modal>
    </div>
  );
};

export default GameCards;
