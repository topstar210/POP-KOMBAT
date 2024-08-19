export interface UpgradeCardIFC {
  id?: string;
  name: string;
  level: number;
  img_link?: string;
  cost: number;
  reward: number;
  cost_increase?: number;
  reward_decay?: number;
}

export interface MyCardIFC {
  title: string;
  description?: string;
  img?: string;
  level: number;
  cost: number;
  reward: number;
}
