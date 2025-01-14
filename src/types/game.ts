export interface MyMissionsIFC {
  id: string;
  level: number;
}

export interface GameDataIFC {
  add: number,
  level: number; // user level 0 ~ 10
  totalEarning: number; // user total earning so far
  balance: number; // user balance
  energy: number;
  isJoinTG: boolean;
  isJoinX: boolean;
  isJoinBinance: boolean;
  isInvite1Friend: boolean;
  isInvite3Friend: boolean;
  isDailyRewardAvailable: boolean;
  consecutiveDays: number; // for daily reward
}

export interface LevelIFC {
  title: string;
  length: number;
  current: number;
  balance: number;
}
