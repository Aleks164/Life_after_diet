import React from "react";
import { RecipeListProps } from "../../../types/types";
import { RecipeItem } from "./RecipeItem";

export const RecipeList = ({ recipeInfo }: RecipeListProps) => (
  <div className="homePage">
    <h3 className="markbooks">Recipe book</h3>
    {recipeInfo.length ? <div className="recipeConteiner">
      {recipeInfo.map((el) => (
        <RecipeItem
          key={el.id.toString()}
          id={el.id}
          title={el.title}
          image={el.image}
        />
      ))}
    </div> : <div className="recipeConteiner"><p className="noFoundMessage">No results were found according to your requirements, reduce the number of parameters and try again, this should help.</p></div>}
  </div>
);
