import "./infoSection.css";

interface InfoSectionProps {
  value: string | number;
  img: any;
  className?: string;
}

const InfoSection = ({ value, className, img, ...props }: InfoSectionProps) => {
  return (
    <div className={`app-info-section ${className}`} {...props}>
      <img src={img} alt="" width={27} />
      <span>{value}</span>
    </div>
  );
};

export default InfoSection;
