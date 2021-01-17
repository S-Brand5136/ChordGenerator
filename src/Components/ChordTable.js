import React from "react";
import { useSelector } from "react-redux";
import ChordItem from "./cardComponents/ChordItem";

// MaterialUI imports
import { Box, Grid, LinearProgress, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  rootElement: {
    marginTop: "3rem",
  },
}));

const ChordTable = () => {
  const classes = useStyles();

  const chordsGenerated = useSelector((state) => state.chordsGenerated);
  const { loading, error, generatedChords } = chordsGenerated;

  return (
    <Box className={classes.rootElement}>
      <Grid container direction="row" justify="center" alignItems="center">
        {loading ? (
          <LinearProgress />
        ) : (
          generatedChords &&
          generatedChords.chords.map((item, index) => (
            <Grid xs={2}>
              <ChordItem key={index} note={item} />
            </Grid>
          ))
        )}
      </Grid>
    </Box>
  );
};

export default ChordTable;
