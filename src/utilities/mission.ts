import { mineData } from "@/data/mission";

/**
 *  return mission object by id
 * @param id
 * @returns
 */
export const getMissionDataById = (id: string) => {
  // Flatten all arrays within the mineData object
  const allMissions = {
    ...mineData.team,
    ...mineData.equipment,
    ...mineData.promotion,
    ...mineData.live_shows,
  };

  // Find the mission with the matching id
  const mission = allMissions[id];

  return mission;
};

const calcReward = (cost: number, rVal: number) => {
  return (rVal * 100) / cost;
};

/**
 * mission lavel defined from 0 to 15
 * @param id
 * @param level
 * @returns
 */
export const getMissionData = (id: string, level: number) => {
  const missionData = getMissionDataById(id);
  if (!missionData)
    return {
      id,
      name: "",
      description: "",
      cost: 0,
      level: 0,
      reward: 0,
    };

  const { name, description, data_by_level } = missionData;
  const dataByLevel = data_by_level[level];

  const reward = calcReward(dataByLevel.cost, dataByLevel.return);
  return {
    id,
    name,
    description,
    cost: dataByLevel.cost,
    level,
    reward,
  };
};
