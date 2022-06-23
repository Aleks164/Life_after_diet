import { addIngredientToList } from "./addIngredientToList";
import { defaultSettings } from "@/utils/defaultSettings";
import { ingridientsList } from "@/utils/ingridientsList";
import { SettingType } from "@/types/types";

describe("addIngredientToList test", () => {
  let setRequestSettingsSpy: jest.Mock;
  let setIngridientInputValueSpy: jest.Mock;
  let setCustomValidity: jest.Mock;
  let eventTest: React.MouseEvent<HTMLButtonElement, MouseEvent>;

  const ingridients = Object.keys(ingridientsList);
  const settings = defaultSettings;
  const fullListOfIngridients = ingridients;
  let option = "ingridientsSelector" as keyof SettingType;
  let optionType = "ingridients";

  beforeEach(() => {
    setRequestSettingsSpy = jest.fn();
    setIngridientInputValueSpy = jest.fn();
    setCustomValidity = jest.fn();
    eventTest = {
      target: { setCustomValidity },
      preventDefault: jest.fn(),
    } as unknown as React.MouseEvent<HTMLButtonElement, MouseEvent>;
  });
  afterEach(() => {
    setRequestSettingsSpy.mockClear();
    setIngridientInputValueSpy.mockClear();
    setCustomValidity.mockClear();
  });

  it("show the expected message if the user has entered the wrong recipe name", () => {
    const isFieldAvailable = true;
    const ingridientInputValue = "test input value";

    addIngredientToList(eventTest, {
      isFieldAvailable,
      settings,
      ingridientInputValue,
      fullListOfIngridients,
      option,
      optionType,
      optionTypeValue: [],
      setRequestSettings: setRequestSettingsSpy,
      setIngridientInputValue: setIngridientInputValueSpy,
    });
    expect(setCustomValidity).toHaveBeenCalledWith(
      'Please input a valid ingridient from list and press "+"'
    );
  });
  it("show the expected message if the user tries to use the ingredients field before enabling it", () => {
    const isFieldAvailable = false;
    const ingridientInputValue = "test input value";

    addIngredientToList(eventTest, {
      isFieldAvailable,
      settings,
      ingridientInputValue,
      fullListOfIngridients,
      option,
      optionType,
      optionTypeValue: [],
      setRequestSettings: setRequestSettingsSpy,
      setIngridientInputValue: setIngridientInputValueSpy,
    });
    expect(setCustomValidity).toHaveBeenCalledWith("You must first press 'On'");
  });
  it("show the expected message if the user tries to enter ingredients when they exist in the exclusion list", () => {
    const isFieldAvailable = true;
    const ingridientInputValue = "ahi tuna";
    settings.excludeIngridientsSelector.excludeIngridients.push(
      ingridientInputValue
    );

    addIngredientToList(eventTest, {
      isFieldAvailable,
      settings,
      ingridientInputValue,
      fullListOfIngridients,
      option,
      optionType,
      optionTypeValue: [],
      setRequestSettings: setRequestSettingsSpy,
      setIngridientInputValue: setIngridientInputValueSpy,
    });
    expect(setCustomValidity).toHaveBeenCalledWith(
      `"${ingridientInputValue}" already exist in exclude ingredients list`
    );
  });
  it("show the expected message if the user tries to enter ingredients when they exist in the ingredients list", () => {
    const isFieldAvailable = true;
    const ingridientInputValue = "black olives";
    settings.ingridientsSelector.ingridients.push(ingridientInputValue);
    addIngredientToList(eventTest, {
      isFieldAvailable,
      settings,
      ingridientInputValue,
      fullListOfIngridients,
      option,
      optionType,
      optionTypeValue: [],
      setRequestSettings: setRequestSettingsSpy,
      setIngridientInputValue: setIngridientInputValueSpy,
    });
    expect(setCustomValidity).toHaveBeenCalledWith(
      `"${ingridientInputValue}" already exist in ingredients list`
    );
  });
  it("add the ingredients to the list and reset input field", () => {
    const isFieldAvailable = true;
    const ingridientInputValue = "asiago cheese";

    addIngredientToList(eventTest, {
      isFieldAvailable,
      settings,
      ingridientInputValue,
      fullListOfIngridients,
      option,
      optionType,
      optionTypeValue: [],
      setRequestSettings: setRequestSettingsSpy,
      setIngridientInputValue: setIngridientInputValueSpy,
    });

    const newIngridientsList = { ...settings };
    newIngridientsList.ingridientsSelector.ingridients.push(
      ingridientInputValue,
      "black olives"
    );
    newIngridientsList.excludeIngridientsSelector.excludeIngridients.push(
      "ahi tuna"
    );
    expect(setRequestSettingsSpy).toHaveBeenCalledWith(newIngridientsList);
    expect(setIngridientInputValueSpy).toHaveBeenCalledWith("");
  });
  it("add the excludes to the list and reset input field", () => {
    const isFieldAvailable = true;
    const ingridientInputValue = "apple juice";
    option = "excludeIngridientsSelector";
    optionType = "excludeIngridients";

    addIngredientToList(eventTest, {
      isFieldAvailable,
      settings,
      ingridientInputValue,
      fullListOfIngridients,
      option,
      optionType,
      optionTypeValue: [],
      setRequestSettings: setRequestSettingsSpy,
      setIngridientInputValue: setIngridientInputValueSpy,
    });

    const newIngridientsList = { ...settings };
    newIngridientsList.ingridientsSelector.ingridients.push(
      ingridientInputValue,
      "black olives"
    );
    newIngridientsList.excludeIngridientsSelector.excludeIngridients.push(
      "ahi tuna",
      "apple juice"
    );
    expect(setRequestSettingsSpy).toHaveBeenCalledWith(newIngridientsList);
    expect(setIngridientInputValueSpy).toHaveBeenCalledWith("");
  });
});
