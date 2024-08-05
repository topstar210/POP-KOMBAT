import "./tabSection.css";

import heroCharacter from "@/assets/imgs/heroCharacter.png";

interface TabSectionProps {}

const TabSection = ({ ...props }: TabSectionProps) => {
  const handleTabClick = (e: any) => {
    const parent = e.currentTarget;
    const rect = parent.getBoundingClientRect();
    const x = e.clientX - rect.left - 8;
    const y = e.clientY - rect.top - 8;

    const plusOne = document.createElement("div");
    plusOne.className = "plus-one";
    plusOne.textContent = "+1";
    plusOne.style.left = `${x}px`;
    plusOne.style.top = `${y}px`;

    const grandparent = parent.parentElement;
    grandparent.appendChild(plusOne);

    plusOne.addEventListener("animationend", () => {
      plusOne.remove();
    });
  };

  return (
    <div className="app-tabsection" {...props}>
      <div style={{ position: "relative" }}>
        <div className="app-tab-pan" onClick={handleTabClick}>
          <div className="app-tab-pan-in">
            <img src={heroCharacter} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabSection;
