const highestCalories = (foods: number[]) => {
  const calorieSum = foods.reduce((sum, food) => sum + food, 0);
  return calorieSum;
};

export default highestCalories;
