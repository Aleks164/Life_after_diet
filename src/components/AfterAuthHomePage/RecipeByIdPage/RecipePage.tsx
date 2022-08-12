import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReplyAllIcon from "@mui/icons-material/ReplyAll";
import {
  Box,
  Grid,
  IconButton,
  Paper,
  Rating,
  Tab,
  Tabs,
  Tooltip,
  Typography,
} from "@mui/material";
import { RecipeType, TabPanelProps } from "../../../types/types";
import { RecipeCart } from "./RecipeCart";
import { RecipeInstruction } from "./RecipeInstruction";
import { useClientSettings } from "../../../hooks/useClientSettings";
import { changeFavouriteStatus } from "./changeFavouriteStatus";

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export const RecipePage = ({ recipe }: RecipeType) => {
  const { сlientFavourite, setClientFavourite } = useClientSettings();
  const navigate = useNavigate();
  const styles = {
    Box: {
      backgroundImage: `url(${recipe.image})`,
      position: "relative",
      zIndex: 1,
      minHeight: "max-content",
      backgroundSize: "cover",
    },
    OpacityBox: {
      position: "absolute",
      top: "0px",
      left: "0px",
      background: "rgba(0, 0, 0, 0.2)",
      zIndex: 2,
      width: "100%",
      height: "100%",
    },
  };
  const arrayOfFavouriteId = Object.keys(сlientFavourite);
  const fafouritCheck = arrayOfFavouriteId.some(
    (favourite) => +favourite === recipe.id
  );
  const [isItInFafouritList, setIsItInFafouritList] = useState(fafouritCheck);
  const [open, setOpen] = useState(false);

  const fafouriteParams = {
    сlientFavourite,
    setClientFavourite,
    recipe,
    isItInFafouritList,
    setIsItInFafouritList,
  };
  const [value, setValue] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Paper
      elevation={2}
      sx={{ maxWidth: "1150px", mt: 1, ml: "auto", mr: "auto" }}
    >
      <Box width="fullWidth" sx={styles.Box}>
        <Box sx={styles.OpacityBox}></Box>
        <Grid
          container
          direction="row"
          justifySelf="center"
          alignItems="center"
          sx={{ position: "relative" }}
        >
          <Grid item>
            <Tooltip
              open={open}
              onClose={() => setOpen(false)}
              onOpen={() => setOpen(true)}
              title="Back to list"
            >
              <IconButton
                sx={{
                  fontSize: "3rem",
                  transition: "color 1s",
                  m: 1,
                  backgroundColor: "#1976d2ad",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "#1976d2",
                    color: "red",
                  },
                }}
                aria-label="back"
                size="large"
                onClick={() => {
                  navigate(-1);
                }}
              >
                <ReplyAllIcon
                  sx={{
                    zIndex: 3,
                    fontSize: "3rem",
                  }}
                />
              </IconButton>
            </Tooltip>
          </Grid>
          <Grid
            item
            xs={8}
            sx={{
              marginLeft: "auto",
              marginRight: "auto",
              textAlign: "center",
            }}
          >
            <Typography
              fontSize={{ xs: "1.5rem", md: "2rem" }}
              sx={{
                position: "relative",
                zIndex: 4,
                fontFamily: "cursive",
                color: "#edefff",
                textShadow: "#1976d2 3px 0px 1px",
                fontWeight: "900",
              }}
            >
              {recipe.title}
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Grid container>
        <Box sx={{ width: "100%" }}>
          <Box
            sx={{
              borderBottom: 1,
              borderColor: "divider",
              position: "relative",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                right: "0px",
                zIndex: 10,
                fontSize: "5.5rem",
              }}
            >
              <Tooltip
                title={
                  isItInFafouritList
                    ? "Remove from favourite"
                    : "Add to favourite"
                }
                followCursor
              >
                <Rating
                  onClick={() => changeFavouriteStatus(fafouriteParams)}
                  name="favourite"
                  defaultValue={isItInFafouritList ? 1 : 0}
                  max={1}
                  sx={{
                    fontSize: "5.5rem",
                  }}
                />
              </Tooltip>
            </Box>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Description" {...a11yProps(0)} />
              <Tab label="Сooking" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <RecipeCart recipe={recipe} />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <RecipeInstruction recipe={recipe} />
          </TabPanel>
        </Box>
      </Grid>
    </Paper>
  );
};
