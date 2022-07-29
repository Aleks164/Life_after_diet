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
  Fab,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { deleteIngridientFromList } from "./deleteIngridientFromList";

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

export function AccordionIngridients({ settings, selectorParam }) {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Adding ingridients</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List>
            {settings.ingridientsSelector.ingridients.length ? (
              settings.ingridientsSelector.ingridients.map((ingridient) => (
                <ListItem key={ingridient} disablePadding>
                  <ListItemButton>
                    <ListItemText primary={ingridient} />
                    <Fab
                      color="primary"
                      onClick={() => {
                        deleteIngridientFromList(ingridient, selectorParam);
                      }}
                      size="small"
                      aria-label="add"
                    >
                      <ClearIcon />
                    </Fab>
                  </ListItemButton>
                </ListItem>
              ))
            ) : (
              <ListItemText
                primary={
                  "Here will be a list of ingredients that should be in the recipe"
                }
              />
            )}
          </List>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
