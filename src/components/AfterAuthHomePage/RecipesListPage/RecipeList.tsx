import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useClientSettings } from "../../../hooks/useClientSettings";
import { RecipeListProps } from "../../../types/types";
import { RecipeItem } from "./RecipeItem";
import { HaveChosenInfo } from "./HaveChosenInfo";
import { SorryUnfoundPage } from "./SorryUnfoundPage";
import { LoadingPage } from "../LoadingPage/LoadinfPage";
import { getRecipeListFromAPi } from "../../../utils/getRecipeListFromAPi";
import { recipeRequestCreator } from "../../../utils/recipeRequestCreator";

export const RecipeList = ({
  recipeInfo,
  setRecipeInfo,
  pageNumber,
  setPageNumber
}: RecipeListProps) => {
  const { сlientSettings } = useClientSettings();
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const isHistory = location.pathname === "/history";
  const isFavourite = location.pathname === "/favourite";

  function flipRecipePage(skipedPages: number) {
    const resultNumberPage = pageNumber + skipedPages;
    getRecipeListFromAPi(recipeRequestCreator(сlientSettings, resultNumberPage))
      .then((response) => {
        console.log(response);
        setRecipeInfo(response);
      })
      .catch(() => {
        setRecipeInfo([]);
      })
    setPageNumber(resultNumberPage);
  }

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(!isLoading);
    }, 500);
  }, []);

  return (
    <div className="homePage">
      {isHistory || isFavourite ? (
        <>
          <div className="chosenParam"></div>
          <div className="leftMenuHomePage"></div>
        </>
      ) : (
        <HaveChosenInfo сlientSettings={сlientSettings} />
      )}
      <div className="markbooks recipeBook">
        {!isHistory && !isFavourite ? (
          <>
            {pageNumber >= 0 ? (
              <button onClick={() => flipRecipePage(-10)} className="backButton flippButton"></button>
            ) : (
              ""
            )}
            <button onClick={() => flipRecipePage(10)} className="forvardButton flippButton"></button>
          </>
        ) : (
          ""
        )}
        <h3>
          {!isHistory && !isFavourite ? "Recipe book" : ""}
          {isHistory ? "Your story" : ""}
          {isFavourite ? "Your favourite list" : ""}
        </h3>
      </div>
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
