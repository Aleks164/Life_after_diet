export async function requestRecipeByIdFromAPI(id: string) {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const fetchBody = `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=${SPOON_API_KEY}`;

  try {
    const response = await window.fetch(fetchBody, options);
    const recipe = await response.json();
    if (recipe.message) throw new Error(recipe.message);
    return recipe;
  } catch (e) {
    throw new Error("request denied");
  }
}
