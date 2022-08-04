import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Button,
  Grid,
  IconButton,
  makeStyles,
  Paper,
  styled,
  Typography,
} from "@mui/material";
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

  const ToTheLeftButton = styled(IconButton)(({ theme }) => ({
    display: pageNumber < 9 ? "none" : "unset",
    backgroundColor: "#1976d245",
    position: "absolute",
    top: "50%",
    zIndex: 2,
    left: "-4%",
    "&:hover": {
      backgroundColor: "#191ed2cf",
      color: "white",
    },
    [theme.breakpoints.only("xs")]: {
      position: "fixed",
      left: "0px",
    },
  }));
  const ToTheRightButton = styled(IconButton)(({ theme }) => ({
    display: recipeInfo.length < 10 ? "none" : "unset",
    backgroundColor: "#1976d245",
    position: "absolute",
    top: "50%",
    zIndex: 2,
    right: "-4%",
    "&:hover": {
      backgroundColor: "#191ed2cf",
      color: "white",
    },
    [theme.breakpoints.only("xs")]: {
      position: "fixed",
      right: "-3px",
    },
  }));

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
        <Grid
          item
          width={{ xs: "100%", md: "75%" }}
          justifyContent="center"
          alignItems="center"
        >
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            item
            xs={12}
          >
            {!isHistory && !isFavourite && (
              <Typography
                sx={{
                  textAlign: "center",
                  width: "fit-content",
                }}
                variant="h3"
              >
                Recipe book
              </Typography>
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
          <Grid item xs={12} sx={{ position: "relative" }}>
            {!isHistory && !isFavourite && (
              <ToTheLeftButton
                color="info"
                onClick={async () => {
                  await flipRecipePage(-10, flipPageParam);
                }}
                aria-label="reply"
                size="large"
              >
                <KeyboardDoubleArrowLeftIcon fontSize="large" />
              </ToTheLeftButton>
            )}
            {!isHistory && !isFavourite && (
              <ToTheRightButton
                color="info"
                onClick={async () => {
                  await flipRecipePage(10, flipPageParam);
                }}
                aria-label="reply"
                size="large"
              >
                <KeyboardDoubleArrowRightIcon fontSize="large" />
              </ToTheRightButton>
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
