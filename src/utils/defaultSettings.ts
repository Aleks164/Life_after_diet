import { SettingType } from "../types/types";

export const defaultSettings: SettingType = {
  dietSelector: { diet: "Gluten Free", status: true },
  cuisinesList: [],
  intolerancesList: [],
  ingridientsSelector: { ingridients: [], status: false },
  mealTypesSelector: { mealType: "", status: false },
  excludeIngridientsSelector: { excludeIngridients: [], status: false },
  maxCaloriesInput: { value: 500, status: false },
};
