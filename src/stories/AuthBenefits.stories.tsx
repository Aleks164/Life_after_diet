import React from "react";
import "@/index.css";
import "@/components/UnAuthHomePage/UnAuthPageStyle.css";
import "@/components/AfterAuthHomePage/AfterAuthHomePageStyles.css";
import { UnAuthHomePage } from "@/components/UnAuthHomePage/UnAuthHomePage";

export default {
  title: 'AuthBenefits',
  component: UnAuthHomePage,
  argTypes: {
  },
};

export const Primary = () => <UnAuthHomePage />;