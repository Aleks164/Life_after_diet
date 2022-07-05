import { InputParamType } from "@/types/types";

export function addIngredientToList(
  e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  {
    settings,
    ingridientInputValue,
    fullListOfIngridients,
    isFieldAvailable,
    option,
    optionType,
    setRequestSettings,
    setIngridientInputValue,
  }: InputParamType
) {
  const checkExcludCroosing =
    settings.excludeIngridientsSelector.excludeIngridients.indexOf(
      ingridientInputValue
    );
  const checkIncludCroosing =
    settings.ingridientsSelector.ingridients.indexOf(ingridientInputValue);
  if (fullListOfIngridients.indexOf(ingridientInputValue) === -1) {
    let message = 'Please input a valid ingridient from list and press "+"';
    if (!isFieldAvailable) message = "You must first press 'On'";
    (e.target as HTMLButtonElement).setCustomValidity(message);
    return;
  }
  if (checkExcludCroosing >= 0) {
    const message = `"${ingridientInputValue}" already exist in exclude ingredients list`;
    (e.target as HTMLButtonElement).setCustomValidity(message);
    return;
  }
  if (checkIncludCroosing >= 0) {
    const message = `"${ingridientInputValue}" already exist in ingredients list`;
    (e.target as HTMLButtonElement).setCustomValidity(message);
    return;
  }
  e.preventDefault();
  let curIngridientsList = [] as string[];
  if (option === "ingridientsSelector" && optionType === "ingridients") {
    curIngridientsList = settings[option][optionType];
  }
  if (
    option === "excludeIngridientsSelector" &&
    optionType === "excludeIngridients"
  ) {
    curIngridientsList = settings[option][optionType];
  }
  curIngridientsList.push(ingridientInputValue);

  const newIngridientsList = {
    ...settings,
    [option]: {
      status: (settings[option] as { ingridients: string[]; status: boolean })
        .status,
      [optionType]: curIngridientsList,
    },
  };
  setRequestSettings(newIngridientsList);
  setIngridientInputValue("");
}
