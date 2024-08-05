import "./coinCounter.css";

import coinImg from "@/assets/imgs/token-image.png";

interface CountCounterProps {
  value: number;
}

const CountCounter = ({ value, ...props }: CountCounterProps) => {
  const coinVal = new Intl.NumberFormat("en-US").format(value);

  return (
    <div className="coin-counter" {...props}>
      <img src={coinImg} alt="" width={40} />
      <span>{coinVal}</span>
    </div>
  );
};

export default CountCounter;
