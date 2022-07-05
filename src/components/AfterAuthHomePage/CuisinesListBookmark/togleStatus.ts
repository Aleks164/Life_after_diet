import { SetRequestSettingsType, SettingType } from "@/types/types";

export function togleStatus(
  e: React.ChangeEvent<HTMLInputElement>,
  setRequestSettings: SetRequestSettingsType,
  settings: SettingType
) {
  let { cuisinesList } = settings;
  const inList = cuisinesList.indexOf(e.target.value);
  if (!(inList >= 0)) cuisinesList.push(e.target.value);
  else cuisinesList = cuisinesList.filter((item) => item !== e.target.value);
  const newDiet = { ...settings, cuisinesList };
  setRequestSettings(newDiet);
}
