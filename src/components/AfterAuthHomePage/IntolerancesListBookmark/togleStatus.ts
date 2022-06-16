import { SetRequestSettingsType, SettingType } from "../../../types/types";

export function togleStatus(
  e: React.ChangeEvent<HTMLInputElement>,
  setRequestSettings: SetRequestSettingsType,
  settings: SettingType
) {
  let { intolerancesList } = settings;
  const inList = intolerancesList.indexOf(e.target.value);
  if (!(inList >= 0)) intolerancesList.push(e.target.value);
  else
    intolerancesList = intolerancesList.filter(
      (item) => item !== e.target.value
    );
  const newDiet = { ...settings, intolerancesList };
  setRequestSettings(newDiet);
}
