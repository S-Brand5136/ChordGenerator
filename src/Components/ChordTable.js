import React from "react";
import { useSelector } from "react-redux";
import ChordItem from "./cardComponents/ChordItem";

// MaterialUI imports
import {
  Box,
  Grid,
  LinearProgress,
  makeStyles,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  rootElement: {
    marginTop: "3rem",
  },
  MuiTypography: {
    color: "white",
  },
}));

const ChordTable = () => {
  const classes = useStyles();

  const chordsGenerated = useSelector((state) => state.chordsGenerated);
  const { loading, generatedChords } = chordsGenerated;

  return (
    <Box className={classes.rootElement}>
      <Grid
        container
        spacing={5}
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item container justify="center" xs={12}>
          <Typography
            className={classes.MuiTypography}
            variant="h4"
            component="h4"
          >
            Generated Chords
          </Typography>
        </Grid>
        {loading ? (
          <LinearProgress />
        ) : (
          generatedChords &&
          generatedChords.chords.map((item, index) => (
            <Grid item container justify="center" xs={12} sm={6} md={4} lg={3}>
              <ChordItem key={index} note={item} />
            </Grid>
          ))
        )}
      </Grid>
    </Box>
  );
};

export default ChordTable;
