import { recipeRequestCreator } from "./recipeRequestCreator";
import { defaultSettings } from "@/utils/defaultSettings";

jest.mock("../API_KEYS", () => ({ API_KEYS: { SPOON_API_KEY: "someApiKey" } }));

describe("recipeRequestCreator test", () => {
  const settings = defaultSettings;
  const skipedPages = 10;

  it("recipeRequestCreator returns a query string of the correct type without skiping pages", () => {
    settings.dietSelector = {
      diet: "",
      status: false,
    };

    const result = recipeRequestCreator(settings);

    expect(result).toBe(
      "https://api.spoonacular.com/recipes/complexSearch?apiKey=someApiKey&number=10"
    );
  });

  it("recipeRequestCreator returns a query string of the correct type", () => {
    settings.cuisinesList = ["cuisine 1,cuisine2"];
    settings.intolerancesList = ["intolerance 1,intolerance 2"];
    settings.dietSelector = {
      diet: "Gluten Free",
      status: true,
    };
    settings.ingridientsSelector = {
      ingridients: ["ingridients 1,ingridients2"],
      status: true,
    };
    settings.excludeIngridientsSelector = {
      excludeIngridients: ["excludeIngridients 1,excludeIngridients2"],
      status: true,
    };
    settings.mealTypesSelector = {
      mealType: "mealType",
      status: true,
    };
    settings.maxCaloriesInput = {
      value: 500,
      status: true,
    };
    const result = recipeRequestCreator(settings, skipedPages);
    expect(result).toBe(
      "https://api.spoonacular.com/recipes/complexSearch?apiKey=someApiKey&diet=gluten20%free&cuisine=cuisine20%1,cuisine2&intolerances=intolerance20%1,intolerance 2&includeIngredients=ingridients20%1,ingridients2&excludeIngredients=excludeingridients20%1,excludeingridients2&type=mealtype&maxCalories=500&offset=10&number=10"
    );
  });
});
