import "./tab.css";
import { ReactNode } from "react";

export interface Tab {
  id: string;
  name: string;
}

interface TapProps {
  children: ReactNode;
  handleClickTab: (tab: Tab) => void;
  active: string;
  menu: Tab[];
  className?: string;
}

const Tap = ({
  children,
  className,
  menu,
  active,
  handleClickTab,
  ...props
}: TapProps) => {
  return (
    <div className={`system-tab ${className}`} {...props}>
      <div className="system-tab-container">
        {menu.map((val: any, i) => (
          <button
            key={i}
            className={`${val.id === active ? "sys-active-tab" : ""}`}
            onClick={() => handleClickTab(val)}
          >
            {val.name}
          </button>
        ))}
      </div>
      <div className="system-tab-data">{children}</div>
    </div>
  );
};

export default Tap;
