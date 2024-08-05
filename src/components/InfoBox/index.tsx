import "./infoSection.css"

interface InfoSectionProps {
  value: string | number;
  img: any
}

const InfoSection = ({ value, img, ...props }: InfoSectionProps) => {
  return (
    <div className="app-info-section" {...props}>
      <img src={img} alt="" width={27} />
      <span>{value}</span>
    </div>
  );
};

export default InfoSection;
