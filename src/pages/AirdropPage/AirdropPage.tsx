import "./AirdropPage.css"
import { useEffect, useState } from "react";

import ComingSoon from "@/components/ComingSoon";
import producerImg from "@/assets/imgs/producer.png";

const AirdropPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Initially make the div appear with rise animation after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);

  const handleClick = () => {
    // Hide the div when clicked
    setIsVisible(false);

    // Reappear the div after 5 seconds
    setTimeout(() => {
      setIsVisible(true);
    }, 5000);
  };

  return <div className="main-page">
    <ComingSoon />
    <div
      className={`animated-div ${isVisible ? "rise" : "hide"}`}
      onClick={handleClick}
    >
      <img src={producerImg} alt="" />
    </div>
  </div>;
};

export default AirdropPage;
