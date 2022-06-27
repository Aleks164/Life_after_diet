import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecipeList } from "@/components/AfterAuthHomePage/RecipesListPage/RecipeList";
import { ClientSettingsProvider } from "@/ClientSettingsProvider/ClientSettingsProvider";
import { listOfRecipesExample } from "@/utils/listOfRecipesExample";
import { RoutesName } from "@/utils/routes";
import "@/index.css";

export default {
  title: "History page",
  component: RecipeList,
  argTypes: {},
};

export const HistoryPage = () => {
  history.pushState({}, "", RoutesName.HISTORY_ROUTE);
  return (<BrowserRouter><ClientSettingsProvider><Routes><Route
    path={RoutesName.HISTORY_ROUTE}
    element={<RecipeList pageNumber={0}
      setPageNumber={() => false}
      recipeInfo={listOfRecipesExample} />}
  ></Route></Routes></ClientSettingsProvider></BrowserRouter>)
};
