import "./ListItem.css";
import { ReactNode } from "react";

interface ListItemProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

const ListItem = ({
  children,
  className,
  onClick,
  ...props
}: ListItemProps) => {
  return (
    <div
      className={`system-listitem ${className}`}
      {...props}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default ListItem;
