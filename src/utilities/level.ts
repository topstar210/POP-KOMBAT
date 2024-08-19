import { levels } from "@/data/constant";

/**
 * return user level information by key
 * @param key
 */
export const getLevelInfo = (key: number) => {
  const level = levels[key];

  if (!level) {
    throw new Error("Invalid key: No level exists for the given key");
  }

  return {
    title: level.title,
    length: levels.length,
    current: key + 1,
    balance: level.balance,
  };
};

/**
 * get level by total earning
 * @param totalVal
 * @returns
 */
export const getLevelByBalance = (totalVal: number) => {
  let closestLevel = levels[0]; // Initialize with the first level

  levels.forEach((level) => {
    if (
      Math.abs(level.balance - totalVal) <
      Math.abs(closestLevel.balance - totalVal)
    ) {
      closestLevel = level;
    }
  });

  const lvlInd = levels.indexOf(closestLevel);

  return {
    title: closestLevel.title,
    length: levels.length,
    current: lvlInd + 1,
    balance: closestLevel.balance,
  };
};
