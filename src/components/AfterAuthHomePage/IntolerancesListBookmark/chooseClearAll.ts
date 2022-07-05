import { SetRequestSettingsType, SettingType } from "@/types/types";

export function chooseClearAll(
  setRequestSettings: SetRequestSettingsType,
  settings: SettingType,
  fullList: string[]
) {
  const lengthOfList = settings.intolerancesList.length;

  if (lengthOfList === 0) {
    const newIntoleranceList = { ...settings, intolerancesList: fullList };
    setRequestSettings(newIntoleranceList);
  } else {
    const newIntoleranceList = { ...settings, intolerancesList: [] };
    setRequestSettings(newIntoleranceList);
  }
}
