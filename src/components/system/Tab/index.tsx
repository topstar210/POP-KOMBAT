import { useState } from "react";
import "./tab.css";

export interface Tab {
	id: string;
	name: string;
	transform: number;
}

interface TapProps {
	children: React.ReactNode;
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
	handleClickTab
}: TapProps) => {
	const [activeLink, setActiveLink] = useState(active);

	const handleNavClick = (tab: Tab) => {
		setActiveLink(tab.id);
		handleClickTab(tab);
	};

	return (
		<div className={`system-tab ${className}`}>
			<div className="sys-tab-wrapper">
				<nav className={`sys_nav`}>
					<ul className="sys_nav__list">
						{menu.map((tab) => (
							<li className="sys_nav__item" key={tab.id}>
								<a
									href="#"
									className={`sys_nav__link ${
										activeLink === tab.id ? "sys_nav__link_active" : ""
									}`}
									data-transform={tab.transform}
									onClick={(e) => {
										e.preventDefault();
										handleNavClick(tab);
									}}
								>
									{tab.name}
								</a>
							</li>
						))}
					</ul>
					<div className="sys_nav__slider">
						<div
							className="sys_nav__slider-rect"
							style={{
								transform: `translateX(${
									menu.find((tab) => tab.id === activeLink)?.transform || 0
								}%)`
							}}
						/>
					</div>
				</nav>
			</div>
			<div className="system-tab-data">{children}</div>
		</div>
	);
};

export default Tap;
