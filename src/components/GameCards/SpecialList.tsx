import "./GameCards.css";
import MyCard from "./MyCards/MyCard";
import { type MyCardIFC } from "@/types/Cards";

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
        {specialData.map((data: MyCardIFC) => (
          <MyCard
            title={data.title}
            description={data.description}
            img={data.img}
            level={data.level}
            total={data.total}
            profit_per_hour={data.profit_per_hour}
          />
        ))}
      </div>
    </>
  );
};

export default SpecialList;
