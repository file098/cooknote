import { defineMongooseModel } from "#nuxt/mongoose";
import type { Dish } from "~/types/dish";

export const DishSchema = defineMongooseModel<Dish>({
  name: "Dish",
  schema: {
    id: {
      type: Number,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    ingredients: [
      {
        type: Object,
        required: true,
      },
    ],
    procedure: [
      {
        type: String,
        required: true,
      },
    ],
    // tags: [
    //   {
    //     type: String,
    //   },
    // ],
  },
  options: {
    timestamps: true,
  },
});
