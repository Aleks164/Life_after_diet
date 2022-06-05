import React from "react";
import { DietDefenitionList } from "./DietDefenition";

export function usefulInfoswitcher(markbookName: string) {
  switch (markbookName) {
    case "Diet definitions":
      return <DietDefenitionList />;
    default:
      return "";
  }
}
