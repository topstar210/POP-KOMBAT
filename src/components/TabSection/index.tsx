import "./tabSection.css";

import heroCharacter from "@/assets/imgs/heroCharacter.png";

interface TabSectionProps {}

const TabSection = ({ ...props }: TabSectionProps) => {
  return (
    <div className="app-tabsection" {...props}>
      <div className="app-tab-pan">
        <div className="app-tab-pan-in">
          <img src={heroCharacter} alt="" />
        </div>
      </div>
    </div>
  );
};

export default TabSection;
