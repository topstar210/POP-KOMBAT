import "./switchbtn.css";

import smile from "@/assets/icons/smile.png";
import annoy from "@/assets/icons/annoy.png";

interface SwitchBtnProps {
	turn: boolean;
	onClick?: () => void;
}

const SwitchBtn = ({ turn, onClick }: SwitchBtnProps) => {
	return (
		<>
			<div
				className={`sys-switch-wrap ${turn ? "on" : "off"
					}`} /* Toggle background color */
				onClick={onClick}
			>
				<div
					className="sys-switch-btn"
					style={{
						transform: `translateX(${turn ? "43px" : "0"})`
					}}
				>
					<div className={`sys-switch-btn-inner ${turn ? "smile" : "annoy"}`}>
						<img src={turn ? smile : annoy} alt="" />
					</div>
				</div>
			</div>
		</>
	);
};

export default SwitchBtn;
