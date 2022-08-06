import {
  Box,
  Button,
  Chip,
  Divider,
  Grid,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import CommitIcon from "@mui/icons-material/Commit";
import { RecipeType, TabPanelProps } from "../../../types/types";
import { Icons } from "./Icons";

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

function CustomDivider() {
  return <Divider sx={{ m: 1 }} />;
}

export const RecipeInstruction = ({ recipe }: RecipeType) => {
  const [hideList, setHideList] = useState(true);
  const instructions = { __html: recipe.instructions };
  const [value, setValue] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const sorryText = `Sorry, but instruction for this recipe don't wrote yet`;

  return (
    <Grid container>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Instruction" {...a11yProps(0)} />
            <Tab label="Steps" {...a11yProps(1)} />
            <Tab label="Preparing ingredients" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Typography variant="h4">Instruction</Typography>
          <Divider />
          {recipe.instructions !== null ? (
            <Grid container>
              <Grid item xs={12} md={10}>
                <Typography
                  sx={{ mt: 2, textAlign: "justify" }}
                  dangerouslySetInnerHTML={instructions}
                ></Typography>
              </Grid>
              <Grid display={{ xs: "none", md: "unset" }} item md={2}>
                <Icons diets={recipe.diets} veryHealthy={recipe.veryHealthy} />
              </Grid>
            </Grid>
          ) : (
            <Typography>{sorryText}</Typography>
          )}
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Typography variant="h4">Preparation</Typography>
          <Button
            className="showIngridients"
            onClick={() => {
              setHideList(!hideList);
            }}
          >
            {hideList ? "Show" : "Hide"} ingridients
          </Button>
          <Divider />
          <Grid container>
            <Grid item xs={12} md={10}>
              <ol>
                {recipe.analyzedInstructions.length > 0 ? (
                  recipe.analyzedInstructions[0].steps.map((step, index) => (
                    <Box key={step.number}>
                      <li style={{ display: "inline-flex" }}>
                        <Typography>
                          {index + 1}. {step.step}
                        </Typography>
                        {step.length && (
                          <Chip
                            label={`${step.length.number} min`}
                            color="primary"
                          />
                        )}
                      </li>
                      <ol hidden={hideList} className="stepIngrList">
                        {step.ingredients.map((ingridient) => (
                          <li key={ingridient.id}>{ingridient.name}</li>
                        ))}
                      </ol>
                      <Divider />
                    </Box>
                  ))
                ) : (
                  <Typography>{sorryText}</Typography>
                )}
              </ol>
            </Grid>
            <Grid display={{ xs: "none", md: "unset" }} item md={2}>
              <Icons diets={recipe.diets} veryHealthy={recipe.veryHealthy} />
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Typography variant="h4">Ingredients</Typography>
          <CustomDivider />
          <Grid container>
            <Grid item xs={12} md={10}>
              {recipe.extendedIngredients.length > 0 ? (
                <Box sx={{ mt: 2 }}>
                  {recipe.extendedIngredients.map((item, index) => (
                    <Grid
                      key={index}
                      container
                      direction="row"
                      justifyContent="flex-start"
                      alignItems="center"
                    >
                      <CommitIcon sx={{ mt: "5px", mr: "5px", pb: "5px" }} />
                      <Typography>{item.original}</Typography>
                      <CustomDivider />
                    </Grid>
                  ))}
                </Box>
              ) : (
                <Typography>{sorryText}</Typography>
              )}
            </Grid>
            <Grid display={{ xs: "none", md: "unset" }} item md={2}>
              <Icons diets={recipe.diets} veryHealthy={recipe.veryHealthy} />
            </Grid>
          </Grid>
        </TabPanel>
      </Box>
    </Grid>
  );
};
