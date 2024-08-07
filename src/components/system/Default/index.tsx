import "./default.css";

interface TapProps {
  className?: string;
}

const Tap = ({ className, ...props }: TapProps) => {
  return (
    <div className={`${className}`} {...props}>
      Default system component to copy and past
    </div>
  );
};

export default Tap;
