import { mineData } from "@/data/mine";
import { ceiling } from "./number";
import { UpgradeCardIFC } from "@/types/card";

const calcCostIncreaseVal = (
  level: number,
  lvl_one_cost: number,
  cost_increase = 0
) => {
  let columnDifference = 1 + (level - 2) * 2;

  // The equivalent calculation
  let result = ceiling(
    lvl_one_cost * Math.pow(1 + cost_increase, columnDifference),
    1
  );

  return result;
};

const calcRewardIncreaseVal = (
  level: number,
  lvl_one_reward: number,
  reward_decay = 0
) => {
  let columnDifference = (level - 2) * 2;
  // The equivalent calculation
  let result = ceiling(
    lvl_one_reward * 1 * Math.pow(1 - reward_decay, columnDifference),
    1
  );

  return result;
};

/**
 *  return mission object by id
 * @param id
 * @returns
 */
export const getMissionDataById = (id: string) => {
  // Flatten all arrays within the mineData object
  const allMissions = [
    ...mineData.team,
    ...mineData.equipment,
    ...mineData.promotion,
    ...mineData.live_shows,
    ...mineData.live_shows,
  ];

  // Find the mission with the matching id
  const mission = allMissions.find((mission) => mission.id === id);

  return mission;
};

const calcCardVal = (
  level: number,
  lvl_one_cost: number,
  lvl_one_reward: number,
  obj: UpgradeCardIFC
) => {
  let cost = obj.cost;
  let reward = obj.reward;

  for (let i = 2; i <= level; i++) {
    const increaseCost = calcCostIncreaseVal(
      i,
      lvl_one_cost,
      obj.cost_increase
    );
    const increaseReward = calcRewardIncreaseVal(
      i,
      lvl_one_reward,
      obj.reward_decay
    );
    cost += increaseCost;
    reward += increaseReward;
  }

  return {
    ...obj,
    level,
    cost,
    reward,
  };
};

/**
 * mission lavel defined from 0 to 15
 * @param id
 * @param level
 * @returns
 */
export const getMissionData = (id: string, level: number) => {
  const cardData = getMissionDataById(id);
  if (!cardData) return {};
  if (level === 1) {
    return cardData;
  } else {
    return calcCardVal(level, cardData.cost, cardData.reward, cardData);
  }
};
