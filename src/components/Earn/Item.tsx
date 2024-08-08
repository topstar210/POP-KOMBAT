import "./EarnItem.css";

interface EarnItemProps {
  className?: string;
}

const EarnItem = ({ className, ...props }: EarnItemProps) => {
  return (
    <div className={`app-earnitem ${className}`} {...props}>
      
    </div>
  );
};

export default EarnItem;
