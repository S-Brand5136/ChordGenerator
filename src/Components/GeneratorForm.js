import React, { useState } from "react";
import Selector from "./formComponents/Selector";
import PreviousSearchs from "./formComponents/PreviousSearchs";

import { Box, Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  rootTag: { marginTop: "2rem" },
}));

const GeneratorForm = () => {
  const classes = useStyles();
  return (
    <Box component="section" className={classes.rootTag}>
      <Grid
        container
        direction="row"
        spacing={5}
        justify="center"
        alignContent="center"
      >
        <Grid item xs={12} lg={6}>
          <Selector />
        </Grid>
        <Grid item xs={12} lg={6}>
          <PreviousSearchs />
        </Grid>
      </Grid>
    </Box>
  );
};

export default GeneratorForm;
