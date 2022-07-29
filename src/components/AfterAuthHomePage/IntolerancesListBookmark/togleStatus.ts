import { SetRequestSettingsType, SettingType } from "../../../types/types";

export function togleStatus(
  e: React.ChangeEvent<HTMLInputElement>,
  setRequestSettings: SetRequestSettingsType,
  settings: SettingType
) {
  let { intolerancesList } = settings;
  const inList = intolerancesList.indexOf(e.target.name);
  if (!(inList >= 0)) intolerancesList.push(e.target.name);
  else
    intolerancesList = intolerancesList.filter(
      (item) => item !== e.target.name
    );
  const newDiet = { ...settings, intolerancesList };
  setRequestSettings(newDiet);
}
