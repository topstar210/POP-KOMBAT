import "./tabSection.css";
import { useState } from "react";
import type { GameDataIFC } from "@/types/game";

import heroCharacter from "@/assets/imgs/heroCharacter.png";
import pressHeroCharacter from "@/assets/imgs/heroCharacter-clicked.png";

interface TabSectionProps {
  gameData: GameDataIFC;
  setBalance: (values: any) => void;
  setDecrementCurEnergy: () => void;
  className?: string;
}

const TabSection = ({
  gameData,
  setBalance,
  setDecrementCurEnergy,
  className,
  ...props
}: TabSectionProps) => {
  const [onPress, setOnPress] = useState(false);

  const handleTouch = (e: any) => {
    setOnPress(true);
    const parent = e.currentTarget;
    const rect = parent.getBoundingClientRect();

    if (e.touches.length > 5) return;

    // Loop through each touch point (multi-touch)
    for (let i = 0; i < e.touches.length; i++) {
      setBalance({
        balance: gameData.balance + 1,
        totalEarning: gameData.totalEarning + 1,
      });

      setDecrementCurEnergy();

      /**
       * animation section start -----------------------------------------------------
       */
      const touch = e.touches[i];
      const x = touch.clientX - rect.left - 8;
      const y = touch.clientY - rect.top - 8;

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

      // Animate the .app-tab-pan
      const appTabPan = parent;
      const rotateX = ((y - rect.height / 2) / rect.height) * 30; // Adjust the factor to control the rotation
      const rotateY = ((x - rect.width / 2) / rect.width) * -30; // Adjust the factor to control the rotation
      appTabPan.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

      // Reset the animation
      setTimeout(() => {
        appTabPan.style.transform = "rotateX(0deg) rotateY(0deg)";
      }, 150);
      // animation section end -----------------------------------------------------
    }
  };

  const handleTouchEnd = () => {
    setOnPress(false);
  };

  return (
    <div className={`app-tabsection ${className}`} {...props}>
      <div style={{ position: "relative" }}>
        <div
          className={`app-tab-pan ${onPress ? "pressed!!!" : ""}`}
          onTouchStart={handleTouch}
          onTouchEnd={handleTouchEnd}
        >
          <div className="app-tab-pan-in">
            {/* {onPress && <div className="pressed-blur"></div>} */}
            <img src={false ? pressHeroCharacter : heroCharacter} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabSection;
