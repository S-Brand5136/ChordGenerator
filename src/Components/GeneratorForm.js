import React from "react";
import Selector from "./formComponents/Selector";

import { Box, Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
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
      </Grid>
    </Box>
  );
};

export default GeneratorForm;
