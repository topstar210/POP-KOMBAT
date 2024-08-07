import "./GameCards.css";

import { useState } from "react";
import { Tap } from "@/components/system";
import { type Tab as TabInterface } from "@/components/system/Tab";
import UpgradeCard from "../UpgradeCard/UpgradeCard";

import { mineData } from "@/data/mine";

interface GameCardsProps {
  className?: string;
}

export interface UpgradeCardIFC {
  name: string;
  level: number;
  img_link: string;
  profit_per_hour: number;
  total: number;
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
      </Tap>
    </div>
  );
};

export default GameCards;
