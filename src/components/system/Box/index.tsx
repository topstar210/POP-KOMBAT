import "./box.css";
import { ReactNode } from "react";

interface BoxProps {
	children: ReactNode;
	className?: string;
	style?: {};
}

const Box = ({ children, className = "", style, ...props }: BoxProps) => {
	return (
		<div className={`main-section ${className}`} style={style} {...props}>
			{children}
		</div>
	);
};

export default Box;
