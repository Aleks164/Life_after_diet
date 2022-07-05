import { ChangeEvent } from "react";
import { togleStatus } from "./togleStatus";
import { defaultSettings } from "@/utils/defaultSettings";

describe("togleStatus test", () => {
  const setRequestSettingsSpy = jest.fn();
  const settings = defaultSettings;
  const eventTest = {
    target: { value: "test" },
  } as ChangeEvent<HTMLInputElement>;

  it("togleStatus add cusine in list if it wasn't in it", () => {
    togleStatus(eventTest, setRequestSettingsSpy, settings);
    const newIntoleranceList = { ...settings };
    newIntoleranceList.cuisinesList.push(eventTest.target.value);
    expect(setRequestSettingsSpy).toHaveBeenCalledWith(newIntoleranceList);
  });
  it("togleStatus delete cusine from list if it was in it", () => {
    const newIntoleranceList = { ...settings, cuisinesList: ["test"] };
    togleStatus(eventTest, setRequestSettingsSpy, newIntoleranceList);
    expect(setRequestSettingsSpy).toHaveBeenCalledWith(settings);
  });
});
