import { levels } from "@/data/constant";

/**
 * return level information by key
 * @param key
 */
export const getLevelInfo = (key: number) => {
  const level = levels[key];

  if (!level) {
    throw new Error("Invalid key: No level exists for the given key");
  }

  return {
    title: level.title,
    total: levels.length,
    current: key + 1,
    balance: level.balance,
  };
};
