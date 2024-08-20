
export default defineEventHandler(async (event) => {
  const id = event.context.params?.id;
  
  if (!id) {
    return { statusCode: 400, message: 'Dish ID is required' };
  }

  try {
    const dish = await DishSchema.findById(id);
    if (!dish) {
      return { statusCode: 404, message: 'Dish not found' };
    }
    return dish;
  } catch (error) {
    return { statusCode: 500, message: 'An error occurred while fetching the dish', error };
  }
});
