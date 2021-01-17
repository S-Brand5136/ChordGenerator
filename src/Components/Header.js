import React from "react";

// MaterialUI imports
import { AppBar, makeStyles, Toolbar, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: "#2A2A2A",
  },
  title: {
    flexGrow: 1,
    color: "white",
  },
  appBar: {
    margin: "0",
    padding: "1rem",
    borderBottom: "1px solid lightgrey",
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <header className={classes.root}>
      <AppBar
        className={classes.appBar}
        color="transparent"
        elevation={0}
        position="static"
      >
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Chord Progression Generator
          </Typography>
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default Header;
