import { tumblerSwitcher } from "./tumblerSwitcher";
import { defaultSettings } from "@/utils/defaultSettings";
import { SettingType } from "@/types/types";

describe("tumblerSwitcher test", () => {
  let newSettings: string;
  let setRequestSettingsSpy: jest.Mock;
  let eventTest:
    | React.DragEvent<HTMLDivElement>
    | React.MouseEvent<HTMLDivElement, MouseEvent>;

  const settings = defaultSettings;
  const option = "ingridientsSelector" as keyof SettingType;
  const optionType = "ingridients";

  beforeEach(() => {
    newSettings = JSON.stringify(settings);
    setRequestSettingsSpy = jest.fn();
    eventTest = { preventDefault: jest.fn() } as unknown as
      | React.DragEvent<HTMLDivElement>
      | React.MouseEvent<HTMLDivElement, MouseEvent>;
  });
  afterEach(() => {
    setRequestSettingsSpy.mockClear();
  });
  it("tumblerSwitcher switch off status to on", () => {
    const isFieldAvailable = false;

    tumblerSwitcher(
      {
        isFieldAvailable,
        settings,
        option,
        optionType,
        optionTypeValue: [],
        setRequestSettings: setRequestSettingsSpy,
      },
      eventTest
    );
    settings.ingridientsSelector.status = true;
    newSettings = JSON.parse(newSettings);
    (newSettings as unknown as SettingType).ingridientsSelector.status = true;
    expect(setRequestSettingsSpy).toHaveBeenCalledWith(newSettings);
  });
  it("tumblerSwitcher switch on status to off", () => {
    const isFieldAvailable = true;

    tumblerSwitcher(
      {
        isFieldAvailable,
        settings,
        option,
        optionType,
        optionTypeValue: [],
        setRequestSettings: setRequestSettingsSpy,
      },
      eventTest
    );
    settings.ingridientsSelector.status = false;
    newSettings = JSON.parse(newSettings);
    (newSettings as unknown as SettingType).ingridientsSelector.status = false;
    expect(setRequestSettingsSpy).toHaveBeenCalledWith(newSettings);
  });
});
