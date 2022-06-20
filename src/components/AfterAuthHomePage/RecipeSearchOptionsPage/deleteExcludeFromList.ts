import { SelectorParamType } from "@/types/types";

export function deleteExcludeFromList(
  deletingIngridient: string,
  { settings, setRequestSettings }: SelectorParamType
) {
  const filtredList =
    settings.excludeIngridientsSelector.excludeIngridients.filter(
      (ingridient) => ingridient !== deletingIngridient
    );
  const newIngridientsList = {
    ...settings,
    excludeIngridientsSelector: {
      ...settings.excludeIngridientsSelector,
      excludeIngridients: filtredList,
    },
  };
  setRequestSettings(newIngridientsList);
}
