import "./tabSection.css";
import { useState } from "react";
import type { GameDataIFC } from "@/types/game";
import { useNotification } from "@/providers/useNotification";

import heroCharacter from "@/assets/imgs/heroCharacter.png";
import { getBoostData } from "@/utilities/boost";
// import pressHeroCharacter from "@/assets/imgs/heroCharacter-clicked.png";

interface TabSectionProps {
	curEenergy: number;
	gameData: GameDataIFC;
	setBalance: (values: any) => void;
	setDecrementCurEnergy: () => void;
	className?: string;
}

const TabSection = ({
	curEenergy,
	gameData,
	setBalance,
	setDecrementCurEnergy,
	className,
	...props
}: TabSectionProps) => {
	const { notification } = useNotification();
	const [onPress, setOnPress] = useState(false);
	const boost = getBoostData(gameData.totalEarning);

	const handleTouch = () => {
		setOnPress(true); // Set onPress to true when the touch starts
	};

	const handleTouchEnd = (e: any) => {
		setOnPress(false); // Set onPress to false when the touch ends
		const parent = e.currentTarget;
		const rect = parent.getBoundingClientRect();

		if (e.changedTouches.length > 5) return;

		if(curEenergy < 1) {
			notification("You don't have enough energe");
			return;
		}

		for (let i = 0; i < e.changedTouches.length; i++) {
			setBalance({
				add: boost.multitap_value,
				balance: gameData.balance + boost.multitap_value,
				totalEarning: gameData.totalEarning + boost.multitap_value
			});

			setDecrementCurEnergy();

			const touch = e.changedTouches[i];
			const x = touch.clientX - rect.left - 8;
			const y = touch.clientY - rect.top - 8;

			const plusOne = document.createElement("div");
			plusOne.className = "plus-one";
			plusOne.textContent = `+${boost.multitap_value}`;
			plusOne.style.left = `${x}px`;
			plusOne.style.top = `${y}px`;

			const grandparent = parent.parentElement;
			grandparent.appendChild(plusOne);

			plusOne.addEventListener("animationend", () => {
				plusOne.remove();
			});

			const appTabPan = parent;
			const rotateX = ((y - rect.height / 2) / rect.height) * 30;
			const rotateY = ((x - rect.width / 2) / rect.width) * -30;
			appTabPan.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

			setTimeout(() => {
				appTabPan.style.transform = "rotateX(0deg) rotateY(0deg)";
			}, 150);
		}
	};

	return (
		<div className={`app-tabsection ${className}`} {...props}>
			<div style={{ position: "relative" }}>
				<div
					className={`app-tab-pan ${onPress ? "pressed" : ""}`}
					onTouchStart={handleTouch}
					onTouchEnd={handleTouchEnd}
				>
					<div
						className={`app-tab-pan-in ${onPress ? "pressed-background" : ""}`}
					>
						<img
							src={onPress ? heroCharacter : heroCharacter} // Switch between images based on `onPress`
							width={213}
							height={285}
							alt="Hero Character"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TabSection;
