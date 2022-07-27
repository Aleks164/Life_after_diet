import { SelectorParamType, SettingType } from "@/types/types";

export function tumblerSwitcher(
  selectorParam: SelectorParamType
) {
  let newSettings: SettingType;
  if (selectorParam.isFieldAvailable) {
    newSettings = {
      ...selectorParam.settings,
      [selectorParam.option]: {
        [selectorParam.optionType]: selectorParam.optionTypeValue,
        status: !selectorParam.isFieldAvailable,
      },
    };
    console.log(newSettings[selectorParam.option])
  } else {
    newSettings = {
      ...selectorParam.settings,
      [selectorParam.option]: {
        [selectorParam.optionType]: selectorParam.optionTypeValue,
        status: !selectorParam.isFieldAvailable,
      },
    };
    console.log(newSettings[selectorParam.option])
  }
  selectorParam.setRequestSettings(newSettings);
}
