import { defineMongooseModel } from "#nuxt/mongoose";
import type { Ingredient } from "~/types/ingredient";

export const IngredientSchema = defineMongooseModel<Ingredient>({
  name: "Ingredient",
  schema: {
    name: {
      type: String,
      required: true,
    },
    quantity: {
      type: Object,
      required: true,
    },
  },
  options: {
    timestamps: true,
  },
});
