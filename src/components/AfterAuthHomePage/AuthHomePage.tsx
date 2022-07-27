import * as React from "react";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { CuisinesListBookmark } from "./CuisinesListBookmark/CuisinesListBookmark";
import { IntolerancesListBookmark } from "./IntolerancesListBookmark/IntolerancesListBookmark";
import { DietDefenitionList } from "./DietDefenition";
import { DietSelector } from "./RecipeSearchOptionsPage/DietSelector";
import { BookmarkPropsType } from "@/types/types";

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3, ml: "auto", mr: "auto" }}>{children}</Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export function AuthHomePage({
  settings,
  setRequestSettings,
}: BookmarkPropsType) {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  return (
    <Box sx={{ bgcolor: "background.paper", minWidth: "500px" }}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Configurator" {...a11yProps(0)} />
          <Tab label="Cuisines" {...a11yProps(1)} />
          <Tab label="Intolerances" {...a11yProps(2)} />
          <Tab label="Diet definitions" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <DietSelector
            settings={settings}
            setRequestSettings={setRequestSettings}
          />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <CuisinesListBookmark
            settings={settings}
            setRequestSettings={setRequestSettings}
          />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <IntolerancesListBookmark
            settings={settings}
            setRequestSettings={setRequestSettings}
          />
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          <DietDefenitionList />
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}
