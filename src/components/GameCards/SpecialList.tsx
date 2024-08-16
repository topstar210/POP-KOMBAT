import "./GameCards.css";
import MyCard from "./MyCards/MyCard";
import { type MyCardIFC } from "@/types/card";

import { specialData } from "@/data/specialData";

const SpecialList = () => {
  return (
    <>
      <div className="app-special-cardtab">
        <button className="active">My Cards</button>
        <button>New Cards</button>
        <button>Missed Opportunities</button>
      </div>
      <div className="card-group">
        {specialData.map((data: MyCardIFC, i: any) => (
          <MyCard
            key={i}
            title={data.title}
            description={data.description}
            img={data.img}
            level={data.level}
            reward={data.reward}
            cost={data.cost}
          />
        ))}
      </div>
    </>
  );
};

export default SpecialList;
