import React from "react";
import {
  Box,
  Paper,
  Alert,
  FormControl,
  Button,
  Stack,
  Grid,
  Typography,
  FormLabel,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { BookmarkPropsType } from "@/types/types";
import { IntolerancesList as fullList } from "@/utils/consts";
import { chooseClearAll } from "./chooseClearAll";
import { togleStatus } from "./togleStatus";

export const IntolerancesListBookmark = ({
  settings,
  setRequestSettings,
}: BookmarkPropsType) => (
  <Paper elevation={3}>
    <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
      <FormLabel component="legend">Intolerance list</FormLabel>

      <FormGroup>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={1}
          columns={{ xs: 4, sm: 8, md: 12 }}
          sx={{
            ml: "auto",
            mr: "auto",
            pt: "2%",
          }}
        >
          {fullList.map((intolerance, index) => (
            <Grid item xs={2} sm={3} md={4} key={index}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={settings.intolerancesList.includes(intolerance)}
                    onChange={(e) => {
                      togleStatus(e, setRequestSettings, settings);
                    }}
                    name={intolerance}
                    icon={<BookmarkBorderIcon />}
                    checkedIcon={<DeleteForeverIcon />}
                  />
                }
                label={intolerance}
              />
            </Grid>
          ))}
        </Grid>
      </FormGroup>
    </FormControl>
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Button
        variant="contained"
        onClick={() => {
          chooseClearAll(setRequestSettings, settings, fullList);
        }}
      >
        {settings.intolerancesList.length > 0 ? "Clear all" : "Choose all"}
      </Button>
    </Grid>
    <Alert severity="info">
      {"*suggested recipes won't contain the selected products"}
    </Alert>
  </Paper>
);
