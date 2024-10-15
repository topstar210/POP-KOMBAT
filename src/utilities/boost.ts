import { boostData } from "@/data/boost";

export const getBoostData = (totalEarning: number) => {
    let closestLevel = boostData[0];

    boostData.forEach((level) => {
      if (
        Math.abs(level.cost - totalEarning) <
        Math.abs(closestLevel.cost - totalEarning)
      ) {
        closestLevel = level;
      }
    });
  
    // const boostInd = boostData.indexOf(closestLevel);
    // console.log(closestLevel);

    return closestLevel;
}