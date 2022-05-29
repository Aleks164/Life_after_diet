import React from "react";
import { useClientSettings } from "../../../hooks/useClientSettings";
import { RecipeListProps } from "../../../types/types";
import { RecipeItem } from "./RecipeItem";

export const RecipeList = ({ recipeInfo }: RecipeListProps) => {
  const { сlientSettings } = useClientSettings();

  return (
    <div className="homePage">
      <h3 className="chosenParam">You have chosen:</h3>
      <div className="leftMenuHomePage">
        {сlientSettings.dietSelector.status ? <div><p>Diet:{сlientSettings.dietSelector.diet}</p><hr />
        </div> : ""}
        {сlientSettings.mealTypesSelector.status ? <div><p>Meal type:{сlientSettings.dietSelector.diet}</p><hr />
        </div> : ""}
        {сlientSettings.cuisinesList.length > 0 ? <div><p>Cuisines:</p>
          {сlientSettings.cuisinesList.map((cuisine, index, array) => <li>{cuisine}{index === array.length - 1 ? <hr /> : ""}</li>)}
        </div> : ""}
        {сlientSettings.intolerancesList.length > 0 ? <div><p>List of intolerances:</p>
          {сlientSettings.intolerancesList.map((intolerance, index, array) => <li>{intolerance}{index === array.length - 1 ? <hr /> : ""}</li>)}
        </div> : ""}
        {сlientSettings.ingridientsSelector.status ? <div><p>List of ingridients:</p>
          {сlientSettings.ingridientsSelector.ingridients.map((ingridient, index, array) => <li>{ingridient}{index === array.length - 1 ? <hr /> : ""}</li>)}
        </div> : ""}
        {сlientSettings.excludeIngridientsSelector.status ? <div><p>List of excludes:</p>
          {сlientSettings.excludeIngridientsSelector.excludeIngridients.map((exclude, index, array) => <li>{exclude}{index === array.length - 1 ? <hr /> : ""}</li>)}
        </div> : ""}
      </div>

      <h3 className="markbooks recipeBook">Recipe book</h3>
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
  )
};
