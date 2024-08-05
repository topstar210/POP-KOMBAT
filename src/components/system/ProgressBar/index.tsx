import { useEffect, useState, useRef } from "react";
import "./progress.css";

interface ProgressProps {
  percent: number;
}

const Ranking = ({ percent, ...props }: ProgressProps) => {
  const [progress, setProgress] = useState(0);
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (progressBarRef.current) {
      const progressBarWidth = progressBarRef.current.offsetWidth;
      const newProgress = (percent / 100) * progressBarWidth;
      setProgress(newProgress);
    }
  }, [percent]);

  return (
    <div className="system-progress-bar" ref={progressBarRef} {...props}>
      <div style={{ width: `${progress}px` }} className="system-progress"></div>
    </div>
  );
};

export default Ranking;
