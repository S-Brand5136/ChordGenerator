import React from "react";

// MaterialUI imports
import {
  Box,
  Card,
  CardContent,
  CardActionArea,
  Hidden,
  makeStyles,
  Typography,
  Slide,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 225,
  },
}));

const ChordItem = ({ note }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography color="secondary" variant="h3" component="h3">
          {note}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ChordItem;
