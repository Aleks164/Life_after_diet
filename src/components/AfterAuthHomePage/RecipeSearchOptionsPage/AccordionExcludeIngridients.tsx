import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import AddIcon from "@mui/icons-material/Add";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import ClearIcon from "@mui/icons-material/Clear";
import { pink } from "@mui/material/colors";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import {
  Button,
  Divider,
  Fab,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
} from "@mui/material";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { deleteExcludeFromList } from "./deleteExcludeFromList";
import { AccordionParamType } from "@/types/types";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export const AccordionExcludeIngridients = ({
  settings,
  selectorParam,
}: AccordionParamType) => (
  <div>
    <Button onClick={() => selectorParam.setExpanded(!selectorParam.expanded)}>
      Adding ingridients{" "}
      {!selectorParam.expanded ? <ArrowRightIcon /> : <ArrowDropDownIcon />}
    </Button>
    {selectorParam.expanded && (
      <Stack spacing={1}>
        {settings.ingridientsSelector.ingridients.length ? (
          settings.ingridientsSelector.ingridients.map((ingridient) => (
            <Grid
              key={ingridient}
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              columns={{ xs: 12 }}
            >
              <Grid item xs={8}>
                <Typography>{ingridient}</Typography>
              </Grid>
              <Grid item xs={4} alignItems="flex-end">
                <Button
                  color="primary"
                  onClick={() => {
                    deleteExcludeFromList(ingridient, selectorParam);
                  }}
                  size="small"
                >
                  <ClearIcon />
                </Button>
              </Grid>
            </Grid>
          ))
        ) : (
          <Typography>
            "Here will be a list of ingredients that should be in the recipe"
          </Typography>
        )}
      </Stack>
    )}
  </div>
);
