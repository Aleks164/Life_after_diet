export async function requestRecipeListFromAPi(queryString: string) {
  const options = {
    method: "GET",
    headers: {},
  };

  try {
    const response = await window.fetch(queryString, options);
    const recipeList = await response.json();
    return recipeList;
  } catch {
    throw new Error("request denied");
  }
}
