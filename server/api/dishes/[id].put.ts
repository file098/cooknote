export default defineEventHandler(async (event) => {
  const id = event.context.params?.id;
  const body = await readBody(event);

  if (!id || !body) {
    return { statusCode: 400, message: 'Dish ID and data are required' };
  }

  try {
    const updatedDish = await DishSchema.findByIdAndUpdate(id, body, { new: true });
    if (!updatedDish) {
      return { statusCode: 404, message: 'Dish not found' };
    }
    return updatedDish;
  } catch (error) {
    return { statusCode: 500, message: 'An error occurred while updating the dish', error };
  }
});
