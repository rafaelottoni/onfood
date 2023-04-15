import { DishType } from "./dish-type";

export type CityProps = {
  id: number;
  name: string;
  slug: string;
  catalogEstimated: number;
};

export type ParamsStaticProps = {
  params: {
    city: string;
  };
};

export type PageDiscoverProps = {
  city: CityProps;
  deliveries: number;
};
