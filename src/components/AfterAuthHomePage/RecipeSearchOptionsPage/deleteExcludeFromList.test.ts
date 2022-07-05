import { deleteExcludeFromList } from "./deleteExcludeFromList";
import { defaultSettings } from "@/utils/defaultSettings";
import { InputParamType } from "@/types/types";

describe("addIngredientToList test", () => {
  let setRequestSettingsSpy: jest.Mock;
  const settings = defaultSettings;

  beforeEach(() => {
    setRequestSettingsSpy = jest.fn();
  });
  afterEach(() => {
    setRequestSettingsSpy.mockClear();
  });

  it("show the expected message if the user has entered the wrong recipe name", () => {
    let newSettings;
    const deletingIngridient = "ahi tuna";
    newSettings = JSON.stringify(settings);
    newSettings = JSON.parse(newSettings);
    newSettings.excludeIngridientsSelector.excludeIngridients.push("ahi tuna");
    deleteExcludeFromList(deletingIngridient, {
      settings: newSettings,
      setRequestSettings: setRequestSettingsSpy,
    } as unknown as InputParamType);
    expect(setRequestSettingsSpy).toHaveBeenCalledWith(settings);
  });
});
