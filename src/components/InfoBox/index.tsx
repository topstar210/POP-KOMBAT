import "./infoSection.css";

interface InfoSectionProps {
  value: string | number;
  img: any;
  className?: string;
  onClick?: () => void;
}

const InfoSection = ({
  value,
  onClick,
  className,
  img,
  ...props
}: InfoSectionProps) => {
  return (
    <div
      className={`app-info-section ${className}`}
      {...props}
      onClick={onClick}
    >
      {/* <img src={img} alt="" width={27} /> */}
      <span>{value}</span>
    </div>
  );
};

export default InfoSection;
