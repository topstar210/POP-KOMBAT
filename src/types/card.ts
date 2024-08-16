export interface UpgradeCardIFC {
  name: string;
  level: number;
  img_link?: string;
  cost: number;
  reward: number;
}

export interface MyCardIFC {
  title: string;
  description?: string;
  img?: string;
  level: number;
  cost: number;
  reward: number;
}
