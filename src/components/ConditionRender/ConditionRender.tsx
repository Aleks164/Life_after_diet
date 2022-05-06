import React from "react";
import { Image } from "../image";
import { Paragraph } from "../paragraph";
import { Title } from "../title";
import { Hr } from "../hr";
import { HSelector } from "../htags";
import { textP } from "../DefultPage/DefultPage";
import { DefultPage } from "../DefultPage";

type SetValue = [
  componentNamePrompt: string,
  propsCompPrompt: string | null | undefined
];

export const ConditionRender = (value: SetValue) => {
  switch (value[0]) {
    case "Image":
      // eslint-disable-next-line no-case-declarations
      let checkFloadting = value[1];
      if (value[1] !== "left" && value[1] !== "right") {
        checkFloadting = "left";
      }
      return <Image floating={checkFloadting as "left" | "right"} />;
    case "Paragraph":
      return <Paragraph textP={textP} />;
    case "Title":
      return <Title />;
    case "Hr":
      return <Hr />;
    case "HSelector":
      return <HSelector value={value[1]} />;
    case "":
      return <DefultPage />;
    default:
      return <DefultPage />;
  }
};
