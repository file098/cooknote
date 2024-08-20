export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);

    if (
      !body.name ||
      !body.ingredients ||
      !body.procedure ||
      !Array.isArray(body.ingredients) ||
      !Array.isArray(body.procedure)
    ) {
      return {
        statusCode: 400,
        message:
          "Name, ingredients, and procedure are required and must be valid arrays",
      };
    }

    const newDish = new DishSchema(body);
    await newDish.save();

    return {
      statusCode: 201,
      message: "Dish created successfully",
      data: newDish,
    };
  } catch (error: any) {
    return {
      statusCode: 500,
      message: "An error occurred while creating the dish",
      error: error.message || error,
    };
  }
});
