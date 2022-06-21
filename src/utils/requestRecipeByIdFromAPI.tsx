export async function requestRecipeByIdFromAPI(id: string) {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const myKey = "2adf7e0ce3d8428f953f022f9543bb6f";
  const fetchBody = `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=${myKey}`;

  try {
    const response = await window.fetch(fetchBody, options);
    const recipe = await response.json();
    if (recipe.message) throw new Error(recipe.message);
    return recipe;
  } catch (e) {
    throw new Error("request denied");
  }
}
