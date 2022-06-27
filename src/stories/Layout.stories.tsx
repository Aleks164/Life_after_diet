import React from "react";
import { BrowserRouter } from "react-router-dom";
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentStory } from '@storybook/react';
import { ClientSettingsProvider } from "@/ClientSettingsProvider/ClientSettingsProvider";
import { Layout } from "@/components/Layout/Layout";
import { IsAuthType } from "@/types/types";
import "@/index.css";

export default {
  title: "Layout",
  component: Layout,
  argTypes: {},
};

const Template: ComponentStory<typeof Layout> = (args: JSX.IntrinsicAttributes & IsAuthType) => <BrowserRouter><ClientSettingsProvider><Layout {...args} /></ClientSettingsProvider></BrowserRouter>;

export const LayoutUnAuth = Template.bind({});
LayoutUnAuth.args = {
  isAuth: null
};

export const LayoutAuth = Template.bind({});
LayoutAuth.args = {
  isAuth: "TestName@mail.ru"
};