import "./GameCards.css";
import { useState, useEffect } from "react";
import { Tap } from "@/components/system";
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

  const [activeTab, setActiveTab] = useState<string>("team");

  const handleClickTabItem = (tab: TabInterface) => {
    setActiveTab(tab.id);
  };

  useEffect(() => {
    console.log("missions :::::", missions);

    // console.log("getMissionData : ", getMissionData("agent", 3));
  }, [missions]);

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
                />
              );
            })}
          </div>
        )}

        {activeTab === "special" && <SpecialList />}
      </Tap>
    </div>
  );
};

export default GameCards;
