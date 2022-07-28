import React from "react";
import { RecipeType } from "../../../types/types";
import { GeneralInfo } from "./GeneralInfo";
import { SummaryText } from "./SummaryText";

export const RecipeCart = ({ recipe }: RecipeType) => (
  <>
    <GeneralInfo recipe={recipe} />
    <SummaryText summary={recipe.summary} />
  </>
);
