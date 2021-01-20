import React from "react";

// MaterialUI imports
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    marginTop: "3rem",
  },
  title: {
    flexGrow: 1,
    color: "white",
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <header className={classes.root}>
      <Typography align="center" variant="h3" className={classes.title}>
        Chord Progression Generator
      </Typography>
    </header>
  );
};

export default Header;
