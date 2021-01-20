import React from "react";

// MaterialUI imports
import { Card, CardContent, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 225,
    padding: "2rem",
    marginBottom: "4rem",
  },
}));

const ChordItem = ({ note }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} elevation={0} variant="outlined">
      <CardContent>
        <Typography variant="h3" component="h3">
          {note}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ChordItem;
