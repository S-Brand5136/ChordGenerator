import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { generateChords } from "../../actions/generateChords";

// MaterialUI imports
import {
  Button,
  ButtonGroup,
  Grid,
  FormControl,
  MenuItem,
  makeStyles,
  InputLabel,
  Select,
  Paper,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  menuItem: {
    color: "black",
  },
  MuiPaper: {
    padding: "1.5rem",
    backgroundColor: "white, 50%",
  },
  MuiButtonGroup: {
    marginTop: "1rem",
  },
  MuiButton: {
    marginTop: "1rem",
    "&:hover": {
      padding: "5px 15px 5px 15px",
      borderStyle: "solid",
      borderWidth: "1px",
      borderColor: "#303f9f",
    },
  },
}));

const Selector = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [keySelected, setKeySelected] = useState("C");
  const [chordsSelected, setChordsSelcted] = useState(["I", "IV", "V"]);
  const [sharp, setSharp] = useState(false);
  const [variant, setVariant] = useState(false);
  const keys = ["C", "D", "E", "F", "G", "A", "B"];
  const chordNumbers = ["I", "II", "III", "IV", "V", "VI", "VII"];

  const chordSelectHandler = (e) => {
    if (!chordsSelected.includes(e)) {
      setChordsSelcted([...chordsSelected, e]);
    } else {
      const newArray = chordsSelected.filter((item) => item !== e);
      setChordsSelcted(newArray);
    }
  };

  const submitHandler = () => {
    const key = `${keySelected} ` + (sharp ? "minor" : "major");
    dispatch(generateChords(chordsSelected, key));
  };

  useEffect(() => {
    const key = `${keySelected} ` + (sharp ? "minor" : "major");
    dispatch(generateChords(chordsSelected, key));
    // eslint-disable-next-line
  }, []);

  return (
    <Paper className={classes.MuiPaper}>
      <Grid
        container
        spacing={5}
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <Grid item container justify="center" xs={12} md={6}>
          <FormControl fullWidth>
            <InputLabel id="select-key">Select Key</InputLabel>
            <Select
              id="select-key"
              value={keySelected}
              onChange={(e) => setKeySelected(e.target.value)}
            >
              {keys.map((item) => (
                <MenuItem className={classes.menuItem} key={item} value={item}>
                  {item} {sharp ? "Minor" : "Major"}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid item xs={12}>
            <Typography
              className={classes.typography}
              variant="h6"
              componen="h6"
            >
              Select which chords to include:
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <ButtonGroup color="primary" className={classes.MuiButtonGroup}>
              {chordNumbers.map((chord) => (
                <Button
                  key={chord}
                  variant={
                    chordsSelected.includes(chord) ? "contained" : "outlined"
                  }
                  onClick={() => chordSelectHandler(chord)}
                >
                  {chord}
                </Button>
              ))}
            </ButtonGroup>
          </Grid>
        </Grid>
        <Grid
          item
          container
          alignItems="center"
          justify="center"
          xs={12}
          md={6}
        >
          <Grid item xs={12}>
            <Typography
              className={classes.typography}
              align="left"
              variant="h6"
              componen="h6"
            >
              Select scale type:
            </Typography>
          </Grid>
          <Grid container item={12}>
            <ButtonGroup color="primary" className={classes.MuiButtonGroup}>
              <Button
                variant={!sharp ? "contained" : "outlined"}
                onClick={() => setSharp(false)}
              >
                Major
              </Button>
              <Button
                variant={sharp ? "contained" : "outlined"}
                onClick={() => setSharp(true)}
              >
                Minor
              </Button>
            </ButtonGroup>
          </Grid>
        </Grid>
        <Grid item container xs={12} md={6}>
          <Grid item xs={12}>
            <Typography
              className={classes.typography}
              align="left"
              variant="h6"
              componen="h6"
            >
              Generate Chord Progression{" "}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Button
              className={classes.MuiButton}
              variant={!variant ? "outlined" : "contained"}
              color="primary"
              onClick={() => submitHandler()}
              onMouseOver={() => setVariant(true)}
              onMouseOut={() => setVariant(false)}
            >
              Generate
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Selector;
