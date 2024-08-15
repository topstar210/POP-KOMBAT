export interface UpgradeCardIFC {
  name: string;
  level: number;
  img_link?: string;
  profit_per_hour: number;
  total: number;
}

export interface MyCardIFC {
  title: string;
  description?: string;
  img?: string;
  level: number;
  profit_per_hour: number;
  total: number;
}
