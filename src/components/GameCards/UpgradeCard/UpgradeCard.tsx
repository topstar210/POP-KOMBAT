import "./UpgradeCard.css";
import { formatToFixed } from "@/utilities/number";
import { type UpgradeCardIFC } from "@/types/card";

import defaultImg from "@/assets/imgs/mission-image.png";
import tokenIcon from "@/assets/icons/icon-token.svg";

interface UpgradeCardProps extends UpgradeCardIFC {
	className?: string;
	onClick?: () => void;
}

const UpgradeCard = ({
	id,
	name,
	level,
	img_link,
	cost,
	reward,
	className,
	onClick,
	...props
}: UpgradeCardProps) => {
	return (
		<div
			className={`app-upgcard ${level > 0 ? "actived-level" : ""} ${className}`}
			onClick={onClick}
			{...props}
		>
			<div className="app-upgcard-body">
				<div>
					<img
						src={`./images/card/${id}_3x.png` || defaultImg}
						alt=""
						width={56}
						height={56}
					/>
				</div>
				<div>
					<div className="upgcard-title">{name}</div>
					<div className="upgcard-profit-perhour">
						<div className="font-xs">Profit per hour</div>
						<div className="app-upgcard-row">
							<img src={tokenIcon} alt="" width={14} height={14} />
							<span className="font-xs">{formatToFixed(reward)}</span>
						</div>
					</div>
				</div>
			</div>
			<div className="horizontal-divider"></div>
			<div className="app-upgcard-bottom">
				<span className="level">lvl {level}</span>
				<div className="vertical-divider"></div>
				<div className="app-upgcard-row">
					<img src={tokenIcon} alt="" width={12} height={12} />
					<span>{formatToFixed(cost)}</span>
				</div>
			</div>
		</div>
	);
};

export default UpgradeCard;
