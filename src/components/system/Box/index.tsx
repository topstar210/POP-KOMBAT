import "./box.css";
import { ReactNode } from "react";

interface BoxProps {
  children: ReactNode;
  style?: {}
} 

const Box = ({ children, style, ...props }: BoxProps) => {
  return (
    <div className="main-section" style={style} {...props}>
      {children}
    </div>
  );
};

export default Box;
