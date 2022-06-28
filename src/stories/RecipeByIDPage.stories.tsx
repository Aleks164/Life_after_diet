import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ClientSettingsProvider } from "@/ClientSettingsProvider/ClientSettingsProvider";
import { RecipePage } from "@/components/AfterAuthHomePage/RecipeByIdPage/RecipePage";
import { RoutesName } from "@/utils/routes";
import { singlRecipe } from "@/utils/singlRecipe";
import "@/index.css";

export default {
  title: "Recipe page",
  component: RecipePage,
  argTypes: {},
};

export const RecipeByIdPage = () => {
  history.pushState({}, "", "/Life_after_diet/recipe/12354");
  return (
    <BrowserRouter>
      <ClientSettingsProvider>
        <Routes>
          <Route
            path={RoutesName.RECIPE_ID_PAGE_ROUTE}
            element={
              <RecipePage recipe={singlRecipe}
              />
            }
          ></Route>
        </Routes>
      </ClientSettingsProvider>
    </BrowserRouter>
  )
};
