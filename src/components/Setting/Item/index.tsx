import "./Item.css";

import arrowRightIcon from "@/assets/icons/arrow-right.png";
import checkIcon from "@/assets/icons/check-circle.png";

interface ItemProps {
	icon?: string;
	title: string;
	description?: string;
	isChecked?: boolean;
	onClick?: () => void;
}

const SettingItem = ({
	icon,
	title,
	description,
	isChecked = false,
	onClick
}: ItemProps) => {
	return (
		<div className="app-settingitem" onClick={onClick}>
			{icon && (
				<img
					src={icon}
					alt=""
					className="app-settingitem-icon"
					width={32}
					height={32}
				/>
			)}
			<div className="app-settingitem-info">
				<div className="title">{title}</div>
				{description && <div className="description">{description}</div>}
			</div>
			<img
				src={isChecked ? checkIcon : arrowRightIcon}
				alt=""
				width={24}
				height={24}
			/>
		</div>
	);
};

export default SettingItem;
