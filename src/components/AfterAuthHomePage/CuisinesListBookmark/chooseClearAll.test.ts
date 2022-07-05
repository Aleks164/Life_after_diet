import { chooseClearAll } from "./chooseClearAll";
import { defaultSettings } from "@/utils/defaultSettings";

describe("chooseClearAll test", () => {
  const setRequestSettingsSpy = jest.fn();
  const fullList = ["item1", "item2", "item3", "item4", "item5"];
  it("chooseClearAll add full list items if nothing is choose", () => {
    const settings = defaultSettings;

    chooseClearAll(setRequestSettingsSpy, settings, fullList);
    const newCuisinesList = { ...settings, cuisinesList: fullList };
    expect(setRequestSettingsSpy).toHaveBeenCalledWith(newCuisinesList);
  });
  it("chooseClearAll clear any chooses if sth was choosed", () => {
    const settings = { ...defaultSettings, cuisinesList: fullList };

    chooseClearAll(setRequestSettingsSpy, settings, fullList);
    const newCuisinesList = { ...settings, cuisinesList: [] };
    expect(setRequestSettingsSpy).toHaveBeenCalledWith(newCuisinesList);
  });
});
