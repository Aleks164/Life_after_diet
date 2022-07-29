import { SetRequestSettingsType, SettingType } from "../../../types/types";

export function togleStatus(
  e: React.ChangeEvent<HTMLInputElement>,
  setRequestSettings: SetRequestSettingsType,
  settings: SettingType
) {
  let { cuisinesList } = settings;
  const inList = cuisinesList.indexOf(e.target.name);
  if (!(inList >= 0)) cuisinesList.push(e.target.name);
  else cuisinesList = cuisinesList.filter((item) => item !== e.target.name);
  const newDiet = { ...settings, cuisinesList };
  setRequestSettings(newDiet);
}

