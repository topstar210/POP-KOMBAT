import "./MyBalance.css";

import coinImg from "@/assets/imgs/token-image.png";

interface MyBalanceProps {
  value: number;
  className?: string;
}

const MyBalance = ({ value, className, ...props }: MyBalanceProps) => {
  const coinVal = new Intl.NumberFormat("en-US").format(value);

  return (
    <div className={`coin-counter ${className}`} {...props}>
      <img src={coinImg} alt="" width={40} height={40} />
      <span>{coinVal}</span>
    </div>
  );
};

export default MyBalance;
