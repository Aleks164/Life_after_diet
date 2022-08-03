import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Grid, IconButton, Paper, Typography } from "@mui/material";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import { useClientSettings } from "../../../hooks/useClientSettings";
import { RecipeListProps } from "../../../types/types";
import { HaveChosenInfo } from "./HaveChosenInfo";
import { SorryUnfoundPage } from "./SorryUnfoundPage";
import { LoadingPage } from "../LoadingPage/LoadinfPage";
import { RoutesName } from "../../../utils/routes";
import { RecipesConteiner } from "./RecipesConteiner";
import { flipRecipePage } from "./flipRecipePage";

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
    <Paper sx={{ p: 3, position: "relative" }}>
      <Grid container justifyContent={{ xs: "unset", md: "center" }}>
        <Grid display={{ xs: "none", md: "block" }} item xs={2}>
          {!(isHistory || isFavourite) && (
            <HaveChosenInfo сlientSettings={сlientSettings} />
          )}
        </Grid>
        <Grid item xs={9} justifyContent="center" alignItems="center">
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            item
            xs={12}
          >
            <Grid item xs={10}>
              {!isHistory && !isFavourite && (
                <Typography
                  sx={{
                    marginLeft: "auto",
                    marginRight: "auto",
                    width: "fit-content",
                  }}
                  variant="h3"
                >
                  Recipe book
                </Typography>
              )}
            </Grid>
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
          <Grid item xs={12} sx={{ position: "relative" }}>
            {!isHistory && !isFavourite && (
              <IconButton
                color="info"
                hidden={pageNumber < 9}
                sx={{
                  position: "fixed",
                  top: "50%",
                  zIndex: 2,
                }}
                onClick={async () => {
                  await flipRecipePage(-10, flipPageParam);
                }}
                aria-label="reply"
                size="large"
              >
                <KeyboardDoubleArrowLeftIcon fontSize="large" />
              </IconButton>
            )}
            {!isHistory && !isFavourite && (
              <IconButton
                hidden={recipeInfo.length < 10}
                sx={{
                  position: "fixed",
                  top: "50%",
                  zIndex: 2,
                  right: "4%",
                }}
                color="info"
                onClick={async () => {
                  await flipRecipePage(10, flipPageParam);
                }}
                aria-label="reply"
                size="large"
              >
                <KeyboardDoubleArrowRightIcon fontSize="large" />
              </IconButton>
            )}
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
