import "./Tabbar.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useIntegration } from "@telegram-apps/react-router-integration";
import { useApp } from "@/providers/useApp";

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
    id: "home",
    title: "Blast",
    icon: exchangeIcon,
    route: "/home",
  },
  {
    id: "mine",
    title: "Mine",
    icon: mineIcon,
    route: "/mine",
  },
  {
    id: "friends",
    title: "Friends",
    icon: friendsIcon,
    route: "/friends",
  },
  {
    id: "earn",
    title: "Earn",
    icon: earnIcon,
    route: "/earn",
  },
  {
    id: "airdrop",
    title: "Airdrop",
    icon: airdropIcon,
    route: "/airdrop",
  },
];

const Tabbar = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("home");

  const { navigator } = useApp();
  const [location] = useIntegration(navigator);

  useEffect(() => {
    let isSet = false;
    tabmenu.map((tab) => {
      if (location.pathname.includes(tab.id)) {
        setActiveTab(tab.id);
        isSet = true;
      }
    });
    !isSet && setActiveTab("");
  }, [location]);

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
