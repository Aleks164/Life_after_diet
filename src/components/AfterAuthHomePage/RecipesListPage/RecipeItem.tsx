import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import ButtonBase from "@mui/material/ButtonBase";
import DinnerDiningIcon from "@mui/icons-material/DinnerDining";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
  Box,
} from "@mui/material";
import { useClientSettings } from "../../../hooks/useClientSettings";
import { RecipeItemPropsType } from "../../../types/types";
import { saveHistory } from "./saveHistory";

export const RecipeItem = ({ title, image, id }: RecipeItemPropsType) => {
  const navigate = useNavigate();
  const { сlientHistory, setClientHistory } = useClientSettings();
  const redirectTo = `/Life_after_diet/recipe/${id}`;
  const redirectParam = {
    title,
    image,
    id,
    сlientHistory,
    setClientHistory,
  };
  const ImageButton = styled(ButtonBase)(({ theme }) => ({
    position: "relative",
    minHeight: 200,
    borderRadius: "15px ",
    [theme.breakpoints.down("sm")]: {
      height: 100,
    },
    "&:hover, &.Mui-focusVisible": {
      zIndex: 1,
      "& .MuiImageBackdrop-root": {
        opacity: 0.15,
      },
      "& .MuiImageMarked-root": {
        opacity: 0,
      },
      "& .MuiTypography-root": {
        border: "4px solid currentColor",
      },
    },
  }));
  const ImageSrc = styled("span")({
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center 40%",
  });

  const Image = styled("span")(({ theme }) => ({
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white,
  }));

  const ImageBackdrop = styled("span")(({ theme }) => ({
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create("opacity"),
  }));

  const ImageMarked = styled("span")(({ theme }) => ({
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity"),
  }));

  return (
    <ImageButton
      focusRipple
      onClick={() => {
        saveHistory(redirectParam);
        navigate(redirectTo);
      }}
      style={{
        boxShadow: "4px 2px 9px 1px #c1daf3",
        overflow: "hidden",
        borderRadius: "25px",
        minWidth: "270px",
        margin: "10px",
      }}
    >
      <ImageSrc style={{ backgroundImage: `url(${image})` }} />
      <ImageBackdrop className="MuiImageBackdrop-root" />
      <Image>
        <Typography
          component="span"
          variant="subtitle1"
          color="inherit"
          sx={{
            position: "relative",
            borderRadius: "25px",
            p: 4,
            pt: 2,
            fontSize: "1.3rem",
            pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
          }}
        >
          {title}
          <ImageMarked className="MuiImageMarked-root" />
        </Typography>
      </Image>
    </ImageButton>
  );
};
