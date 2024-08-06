import { useState } from "react";
import "./Tabbar.css";
import { useNavigate } from "react-router-dom";

import exchangeIcon from "@/assets/icons/exchange.png";
import mineIcon from "@/assets/icons/mine.png";
import friendsIcon from "@/assets/icons/friend.png";
import earnIcon from "@/assets/icons/earn.png";
import airdropIcon from "@/assets/icons/airdrop.png";

interface Tabmune {
  id: string;
  title: string;
  icon: string;
  route: string;
}

const tabmenu: Tabmune[] = [
  {
    id: "exchange",
    title: "Exchange",
    icon: exchangeIcon,
    route: '/home'
  },
  {
    id: "mine",
    title: "Mine",
    icon: mineIcon,
    route: '/mine'
  },
  {
    id: "friends",
    title: "Friends",
    icon: friendsIcon,
    route: '/home'
  },
  {
    id: "earn",
    title: "Earn",
    icon: earnIcon,
    route: '/home'
  },
  {
    id: "airdrop",
    title: "Airdrop",
    icon: airdropIcon,
    route: '/launch-params'
  },
];

const Tabbar = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("exchange");

  const handleTabClick = (tab: Tabmune) => {
    navigate(tab.route);
    setActiveTab(tab.id);
  };

  return (
    <div className="tabbar">
      <div className="tab-container">
        {tabmenu.map((tab: Tabmune, i) => (
          <button
            key={i}
            className={`${tab.id === activeTab && "active"}`}
            onClick={() => handleTabClick(tab)}
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
