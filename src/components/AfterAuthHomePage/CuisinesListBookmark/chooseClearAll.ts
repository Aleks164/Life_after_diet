import { SetRequestSettingsType, SettingType } from "@/types/types";

export function chooseClearAll(
  setRequestSettings: SetRequestSettingsType,
  settings: SettingType,
  fullList: string[]
) {
  const lengthOfList = settings.cuisinesList.length;

  if (lengthOfList === 0) {
    const newIntoleranceList = { ...settings, cuisinesList: fullList };
    setRequestSettings(newIntoleranceList);
  } else {
    const newIntoleranceList = { ...settings, cuisinesList: [] };
    setRequestSettings(newIntoleranceList);
  }
}
