import type { Ingredient } from "./ingredient";

export interface Dish {
    id: number;
    name: string;
    ingredients: Array<Ingredient>;
    procedure: Array<string>;
  }