import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
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
  pageNumber,
  setPageNumber
}: RecipeListProps) => {
  const { сlientSettings } = useClientSettings();
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHistory = location.pathname === "/history";
  const isFavourite = location.pathname === "/favourite";

  function flipRecipePage(skipedPages: number) {
    const resultNumberPage = pageNumber + skipedPages;
    getRecipeListFromAPi(recipeRequestCreator(сlientSettings, resultNumberPage))
      .then((response) => {
        navigate("/recipebook/", { state: { recipeInfo: response } });
      })
      .catch(() => {
        navigate("/");
      });
    setPageNumber(resultNumberPage);
  }

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
          <>
            <div
              hidden={pageNumber < 9}
              onClick={() => {
                flipRecipePage(-10);
              }}
              className="backButton flippButton"
            >
              <div className="arrow_2">
                <div></div>
              </div>
            </div>
            <div
              hidden={recipeInfo.length < 10}
              onClick={() => {
                flipRecipePage(10);
              }}
              className="forwardButton flippButton"
            >
              <div className="arrow_2">
                <div></div>
              </div>
            </div>
          </>
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
