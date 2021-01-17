import React from "react";
import { useSelector } from "react-redux";

// MaterialUI imports
import { Box, Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({}));

const ChordTable = () => {
  const classes = useStyles();

  const chordsGenerated = useSelector((state) => state.chordsGenerated);
  const { loading, error } = chordsGenerated;

  return (
    <Box>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
      ></Grid>
    </Box>
  );
};

export default ChordTable;
