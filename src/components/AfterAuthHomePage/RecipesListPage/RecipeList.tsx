import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useClientSettings } from "../../../hooks/useClientSettings";
import { RecipeListProps } from "../../../types/types";
import { RecipeItem } from "./RecipeItem";
import { HaveChosenInfo } from "./HaveChosenInfo";
import { SorryUnfoundPage } from "./SorryUnfoundPage";
import { LoadingPage } from "../LoadingPage/LoadinfPage";

export const RecipeList = ({ recipeInfo }: RecipeListProps) => {
  const { сlientSettings } = useClientSettings();
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const isHistory = location.pathname === "/history";
  const isFavourite = location.pathname === "/favourite";

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(!isLoading);
    }, 500);
  }, []);

  return (
    <div className="homePage">
      {isHistory || isFavourite ? (
        <>
          <h3 className="chosenParam"></h3>
          <div className="leftMenuHomePage"></div>
        </>
      ) : (
        <HaveChosenInfo сlientSettings={сlientSettings} />
      )}
      <h3 className="markbooks recipeBook">
        {!isHistory && !isFavourite ? "Recipe book" : ""}
        {isHistory ? "Your story" : ""}
        {isFavourite ? "Your favourite list" : ""}
      </h3>
      {isLoading ? (
        <>
          {recipeInfo.length ? (
            <div className="recipeConteiner">
              {recipeInfo.map((recipe) => (
                <RecipeItem
                  key={recipe.id.toString()}
                  id={recipe.id}
                  title={recipe.title}
                  image={recipe.image}
                />
              ))}
            </div>
          ) : (
            <div className="recipeConteiner">
              <SorryUnfoundPage />
            </div>
          )}
        </>
      ) : (
        <div className="loadingPage">
          <LoadingPage />
        </div>
      )}
    </div>
  );
};
