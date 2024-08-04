import { useState } from "react";
import "./Tabbar.css";

import exchangeIcon from "@/assets/icons/exchange.png";
import mineIcon from "@/assets/icons/mine.png";
import friendsIcon from "@/assets/icons/friend.png";
import earnIcon from "@/assets/icons/earn.png";
import airdropIcon from "@/assets/icons/airdrop.png";

interface Tabmune {
  id: string;
  title: string;
  icon: string;
}

const tabmenu: Tabmune[] = [
  {
    id: "exchange",
    title: "Exchange",
    icon: exchangeIcon,
  },
  {
    id: "mine",
    title: "Mine",
    icon: mineIcon,
  },
  {
    id: "friends",
    title: "Friends",
    icon: friendsIcon,
  },
  {
    id: "earn",
    title: "Earn",
    icon: earnIcon,
  },
  {
    id: "airdrop",
    title: "Airdrop",
    icon: airdropIcon,
  },
];

const Tabbar = () => {
  const [activeTab, setActiveTab] = useState("exchange");

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <div className="tabbar">
      <div className="tab-container">
        {tabmenu.map((tab: Tabmune, i) => (
          <button
            key={i}
            className={`${tab.id === activeTab && "active"}`}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.id === activeTab && <img src={tab.icon} alt={tab.id} />}
            <div>{tab.title}</div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Tabbar;
