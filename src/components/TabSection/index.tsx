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

    // Animate the .app-tab-pan
    const appTabPan = parent;
    const rotateX = ((y - rect.height / 2) / rect.height) * 30; // Adjust the factor to control the rotation
    const rotateY = ((x - rect.width / 2) / rect.width) * -30; // Adjust the factor to control the rotation
    appTabPan.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

    // Reset the animation
    setTimeout(() => {
      appTabPan.style.transform = "rotateX(0deg) rotateY(0deg)";
    }, 150);

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
