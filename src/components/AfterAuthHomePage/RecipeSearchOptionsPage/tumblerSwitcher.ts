import { SelectorParamType, SettingType } from "@/types/types";

export function tumblerSwitcher(
  selectorParam: SelectorParamType,
  e:
    | React.DragEvent<HTMLDivElement>
    | React.MouseEvent<HTMLDivElement, MouseEvent>
) {
  e.preventDefault();
  let newSettings: SettingType;
  if (selectorParam.isFieldAvailable) {
    newSettings = {
      ...selectorParam.settings,
      [selectorParam.option]: {
        [selectorParam.optionType]: selectorParam.optionTypeValue,
        status: !selectorParam.isFieldAvailable,
      },
    };
  } else {
    newSettings = {
      ...selectorParam.settings,
      [selectorParam.option]: {
        [selectorParam.optionType]: selectorParam.optionTypeValue,
        status: !selectorParam.isFieldAvailable,
      },
    };
  }
  selectorParam.setRequestSettings(newSettings);
}
