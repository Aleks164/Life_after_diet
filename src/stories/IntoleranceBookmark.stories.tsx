import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentStory } from "@storybook/react";
import { defaultSettings } from "@/utils/defaultSettings";
import { SettingType } from "@/types/types";
import { IntolerancesListBookmark } from "@/components/AfterAuthHomePage/IntolerancesListBookmark/IntolerancesListBookmark";
import "@/components/AfterAuthHomePage/AfterAuthHomePageStyles.css";
import "@/index.css";

export default {
  title: "Intolerances list",
  component: IntolerancesListBookmark,
  argTypes: {},
};
let defaulTesttSetting = JSON.stringify(defaultSettings);

const Template: ComponentStory<typeof IntolerancesListBookmark> = (args) => (
  <IntolerancesListBookmark {...args} />
);

export const IntolerancesEmptyList = Template.bind({});
IntolerancesEmptyList.args = {
  setRequestSettings: () => jest.fn(),
  settings: defaultSettings,
};

export const IntolerancesNotEmptyList = Template.bind({});
defaulTesttSetting = JSON.parse(defaulTesttSetting);
(defaulTesttSetting as unknown as SettingType).intolerancesList = [
  "Dairy",
  "Egg",
  "Gluten",
  "Grain",
  "Peanut",
];
IntolerancesNotEmptyList.args = {
  setRequestSettings: () => jest.fn(),
  settings: defaulTesttSetting as unknown as SettingType,
};
