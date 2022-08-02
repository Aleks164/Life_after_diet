import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Grid, Paper, Typography } from "@mui/material";
import { useClientSettings } from "../../../hooks/useClientSettings";
import { RecipeListProps } from "../../../types/types";
import { HaveChosenInfo } from "./HaveChosenInfo";
import { SorryUnfoundPage } from "./SorryUnfoundPage";
import { LoadingPage } from "../LoadingPage/LoadinfPage";
import { RoutesName } from "../../../utils/routes";
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
    <Paper sx={{ p: 3 }}>
      <Grid container>
        <Grid item xs={0} md={2}>
          {!(isHistory || isFavourite) && (
            <HaveChosenInfo сlientSettings={сlientSettings} />
          )}
        </Grid>
        <Grid container item xs={9} justifyContent="center" alignItems="center">
          <Grid item xs={12}>
            {!isHistory && !isFavourite && (
              <RecipesPageNavigationArrows
                pageNumber={pageNumber}
                flipPageParam={flipPageParam}
                recipeInfoLength={recipeInfo.length}
              />
            )}

            {!isHistory && !isFavourite && (
              <Typography variant="h3">Recipe book</Typography>
            )}
            {isHistory && (
              <>
                <Typography variant="h3">Your story</Typography>
                <Typography>last 10</Typography>
              </>
            )}

            {isFavourite && (
              <Typography variant="h3">Your favourite list</Typography>
            )}
          </Grid>
          <Grid item xs={12}>
            {isLoading ? (
              <>
                {recipeInfo.length ? (
                  <RecipesConteiner recipeInfo={recipeInfo} />
                ) : (
                  <Paper>
                    <SorryUnfoundPage />
                  </Paper>
                )}
              </>
            ) : (
              <div className="loadingPage">
                <LoadingPage />
              </div>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};
