import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useClientSettings } from "@/hooks/useClientSettings";
import { RecipeListProps } from "@/types/types";
import { HaveChosenInfo } from "./HaveChosenInfo";
import { SorryUnfoundPage } from "./SorryUnfoundPage";
import { LoadingPage } from "../LoadingPage/LoadinfPage";
import { RoutesName } from "@/utils/routes";
import { RecipesConteiner } from "./RecipesConteiner";
import { RecipesPageNavigationArrows } from "./RecipesPageNavigationArrows";

export const RecipeList = ({
  recipeInfo,
  pageNumber,
  setPageNumber,
}: RecipeListProps) => {
  const { сlientSettings } = useClientSettings();
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHistory = location.pathname === RoutesName.HISTORY_ROUTE;
  const isFavourite = location.pathname === RoutesName.FAVOURITE_ROUTE;
  const flipPageParam = { сlientSettings, navigate, setPageNumber, pageNumber };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(!isLoading);
    }, 500);
  }, []);
  return (
    <div className={isHistory || isFavourite ? "homePage" : "recipeListPage"}>
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
          <RecipesPageNavigationArrows
            pageNumber={pageNumber}
            flipPageParam={flipPageParam}
            recipeInfoLength={recipeInfo.length}
          />
        ) : (
          ""
        )}
        <h3>
          {!isHistory && !isFavourite ? "Recipe book" : ""}
          {isHistory ? (
            <>
              <p>Your story</p>last 10<p></p>
            </>
          ) : (
            ""
          )}
          {isFavourite ? "Your favourite list" : ""}
        </h3>
      </div>
      {isLoading ? (
        <>
          {recipeInfo.length ? (
            <RecipesConteiner recipeInfo={recipeInfo} />
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
