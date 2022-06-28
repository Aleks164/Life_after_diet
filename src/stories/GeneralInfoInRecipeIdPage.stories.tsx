import React from "react";
import { singlRecipe } from "@/utils/singlRecipe";
import { RecipeInstruction } from "@/components/AfterAuthHomePage/RecipeByIdPage/RecipeInstruction";
import "@/index.css";

export default {
  title: "RecipeInstruction Page",
  component: RecipeInstruction,
  argTypes: {},
};

export const RecipeInstructionInRecipeIdPage = () => <RecipeInstruction recipe={singlRecipe} />;
