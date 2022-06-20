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
    return new Error("request denied");
  }
}
