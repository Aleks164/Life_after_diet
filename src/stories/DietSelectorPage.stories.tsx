import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentStory } from "@storybook/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { defaultSettings } from "@/utils/defaultSettings";
import { SettingType } from "@/types/types";
import { DietSelector } from "@/components/AfterAuthHomePage/RecipeSearchOptionsPage/DietSelector";
import "@/components/AfterAuthHomePage/AfterAuthHomePageStyles.css";
import "@/index.css";
import { ClientSettingsProvider } from "@/ClientSettingsProvider/ClientSettingsProvider";
import { RoutesName } from "@/utils/routes";

export default {
  title: "Diet selector page",
  component: DietSelector,
  argTypes: {},
};
const defaulTesttSetting = JSON.stringify(defaultSettings);

const Template: ComponentStory<typeof DietSelector> = (args) => {
  history.pushState({}, "", RoutesName.HOME_PAGE_ROUTE);
  return (
    <BrowserRouter>
      <ClientSettingsProvider>
        <Routes>
          <Route
            path={RoutesName.HOME_PAGE_ROUTE}
            element={<DietSelector {...args} />}
          ></Route>
        </Routes>
      </ClientSettingsProvider>
    </BrowserRouter>
  );
};

export const DietSelectorDefaultSettings = Template.bind({});
DietSelectorDefaultSettings.args = {
  setRequestSettings: () => jest.fn(),
  settings: defaultSettings,
};

export const DietSelectorUserSettings = Template.bind({});
const userSettings = JSON.parse(defaulTesttSetting);
(userSettings as unknown as SettingType).mealTypesSelector.mealType =
  "main course";
(userSettings as unknown as SettingType).mealTypesSelector.status = true;
(userSettings as unknown as SettingType).ingridientsSelector.ingridients = [
  "agave nectar",
];
(userSettings as unknown as SettingType).ingridientsSelector.status = true;
(
  userSettings as unknown as SettingType
).excludeIngridientsSelector.excludeIngridients = ["beef"];
(userSettings as unknown as SettingType).excludeIngridientsSelector.status =
  true;
(userSettings as unknown as SettingType).maxCaloriesInput.value = 800;
(userSettings as unknown as SettingType).maxCaloriesInput.status = true;
DietSelectorUserSettings.args = {
  setRequestSettings: () => jest.fn(),
  settings: userSettings as unknown as SettingType,
};
