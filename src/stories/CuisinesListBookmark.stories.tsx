import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentStory } from '@storybook/react';
import { CuisinesListBookmark } from "@/components/AfterAuthHomePage/CuisinesListBookmark/CuisinesListBookmark";
import { defaultSettings } from "@/utils/defaultSettings";
import { SettingType } from "@/types/types";
import "@/components/AfterAuthHomePage/AfterAuthHomePageStyles.css";
import "@/index.css";

export default {
  title: "Cuisines list",
  component: CuisinesListBookmark,
  argTypes: {},
};
let defaulTesttSetting = JSON.stringify(defaultSettings);

const Template: ComponentStory<typeof CuisinesListBookmark> = (args) => <CuisinesListBookmark {...args} />;

export const CuisinesEmptyList = Template.bind({});
CuisinesEmptyList.args = {
  setRequestSettings: () => jest.fn(),
  settings: defaultSettings
};

export const CuisinesNotEmptyList = Template.bind({});
defaulTesttSetting = JSON.parse(defaulTesttSetting);
(defaulTesttSetting as unknown as SettingType).cuisinesList = ["African",
  "American",
  "British",
  "Cajun"];
CuisinesNotEmptyList.args = {
  setRequestSettings: () => jest.fn(),
  settings: defaulTesttSetting as unknown as SettingType
};