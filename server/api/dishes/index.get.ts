import type { Dish } from "~/types/dish";

export default defineEventHandler(async (event) => {
  try {
    const dishes = await DishSchema.find({});
    return {
      statusCode: 200,
      message: "Dishes retrieved successfully",
      data: dishes as Dish[],
    };
  } catch (error: any) {
    return {
      statusCode: 500,
      message: "An error occurred while fetching the dishes",
      error: error.message || error,
    };
  }
});
