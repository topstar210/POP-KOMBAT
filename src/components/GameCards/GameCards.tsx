import "./GameCards.css";

import { useState } from "react";
import { Tap } from "@/components/system";
import { type Tab as TabInterface } from "@/components/system/Tab";
import { type UpgradeCardIFC } from "@/types/Cards";

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
  const [activeTab, setActiveTab] = useState<string>("team");

  const handleClickTabItem = (tab: TabInterface) => {
    setActiveTab(tab.id);
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
            {mineData[activeTab].map((data: UpgradeCardIFC) => (
              <UpgradeCard
                name={data.name}
                img_link={data.img_link}
                profit_per_hour={data.profit_per_hour}
                level={data.level}
                total={data.total}
              />
            ))}
          </div>
        )}

        {activeTab === "special" && <SpecialList />}
      </Tap>
    </div>
  );
};

export default GameCards;
