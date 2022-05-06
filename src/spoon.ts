const myKey = "2adf7e0ce3d8428f953f022f9543bb6f";

const options = {
  method: "GET",
  headers: {
    "X-API-Quota-Left": "true"
  }
};
export function spoon() {
  fetch(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${myKey}&diet=gluten%20free&number=10`,
    options
  )
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
}

//https://spoonacular.com/food-api/docs

//https://rapidapi.com/spoonacular/api/recipe-food-nutrition

//https://rapidapi.com/blog/recipe-apis/
