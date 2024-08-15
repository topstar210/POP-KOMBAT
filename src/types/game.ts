export interface GameDataIFC {
  level: number; // user level 0 ~ 10
  balance: number; // user balance
  energy: number;
  yesterdayLogin?: boolean;
  todayLogin?: boolean;
  isJoinTG: boolean;
  isJoinX: boolean;
  isJoinBinance: boolean;
  isInvite1Friend: boolean;
  isInvite3Friend: boolean;
}

export interface LevelIFC {
  title: string;
  total: number;
  current: number;
  balance: number;
}
