import "./GameCards.css";

import { useState } from "react";
import { Tap } from "@/components/system";
import { type Tab as TabInterface } from "@/components/system/Tab";
import UpgradeCard from "../UpgradeCard/UpgradeCard";

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
        <div className="card-group">
          <UpgradeCard />
          <UpgradeCard />
          <UpgradeCard />
          <UpgradeCard />
        </div>
      </Tap>
    </div>
  );
};

export default GameCards;
