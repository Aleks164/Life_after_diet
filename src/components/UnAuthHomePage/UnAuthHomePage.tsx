import React, { useEffect, useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Link, styled, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import { CaruselItem } from "./CaruselItem";
import { authBenefits } from "@/utils/authBenefits";
import { RoutesName } from "@/utils/routes";

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
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const SlideButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: "#1976d245",
  position: "absolute",
  top: "50%",
  zIndex: 2,
  "&:hover": {
    backgroundColor: "#41b9e8",
    color: "white",
  },
}));

export const UnAuthHomePage = () => {
  const theme = useTheme();
  const [value, setValue] = useState(0);

  const historyLineChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  useEffect(() => {
    const timeOutId = setInterval(() => {
      setValue((prev) => (prev + 2 > authBenefits.length ? 0 : prev + 1));
    }, 8000);
    return () => {
      clearInterval(timeOutId);
    };
  }, [value]);

  return (
    <Box>
      <Typography variant="h3" sx={{ textAlign: "center", m: 2, mt: 3 }}>
        <Link href={RoutesName.LOGIN_ROUTE}>Log in</Link> and you will be able
        to
      </Typography>
      <Box
        sx={{
          m: 2,
          position: "relative",
          maxWidth: "960px",
          ml: "auto",
          mr: "auto",
          backgroundColor: "#fff0",
        }}
      >
        <SlideButton
          color="info"
          onClick={() => {
            setValue(value - 1 < 0 ? authBenefits.length - 1 : value - 1);
          }}
          aria-label="reply"
          size="large"
        >
          <KeyboardDoubleArrowLeftIcon fontSize="large" />
        </SlideButton>
        <SlideButton
          color="info"
          sx={{ right: "0px" }}
          onClick={() => {
            setValue(value + 2 > authBenefits.length ? 0 : value + 1);
          }}
          aria-label="reply"
          size="large"
        >
          <KeyboardDoubleArrowRightIcon fontSize="large" />
        </SlideButton>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          {authBenefits.map((_, index) => (
            <TabPanel
              key={index}
              value={value}
              index={index}
              dir={theme.direction}
            >
              <CaruselItem index={index} />
            </TabPanel>
          ))}
        </SwipeableViews>
        <AppBar position="static">
          <Tabs
            sx={{ minHeight: "unset" }}
            value={value}
            onChange={historyLineChange}
            indicatorColor="secondary"
            textColor="inherit"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            {authBenefits.map((_, index) => (
              <Tab
                key={index}
                sx={{
                  width: `${Math.floor(100 / authBenefits.length)}%`,
                  backgroundColor: "#81d0ff",
                  border: "2px solid",
                  minWidth: "unset",
                  minHeight: "unset",
                }}
                {...a11yProps(index)}
              />
            ))}
          </Tabs>
        </AppBar>
      </Box>
    </Box>
  );
};
