import React, { useState } from "react";
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
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  typography: {
    color: "white",
  },
}));

const Selector = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [keySelected, setKeySelected] = useState("C");
  const [chordsSelected, setChordsSelcted] = useState(["I", "IV", "V"]);
  const [sharp, setSharp] = useState(true);
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
    dispatch(generateChords());
  };

  return (
    <Grid
      container
      spacing={5}
      direction="row"
      justify="center"
      alignItems="center"
    >
      <Grid item container justify="center" xs={12} md={6}>
        <FormControl style={{ width: "20%" }}>
          <InputLabel id="select-key">Select Key</InputLabel>
          <Select
            id="select-key"
            value={keySelected}
            onChange={(e) => setKeySelected(e.target.value)}
          >
            {keys.map((item) => (
              <MenuItem key={item} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item container justify="center" xs={12} md={6}>
        <Grid item xs={12}>
          <Typography className={classes.typography} variant="h6" componen="h6">
            Select which chords to include:
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <ButtonGroup color="primary">
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
      <Grid item container justify="center" xs={12} md={6}>
        <Grid item xs={12}>
          <Typography
            className={classes.typography}
            align="center"
            variant="h6"
            componen="h6"
          >
            Select scale type:
          </Typography>
        </Grid>
        <Grid item={12}>
          <ButtonGroup color="primary">
            <Button
              variant={sharp ? "contained" : "outlined"}
              onClick={() => setSharp(true)}
            >
              # Minor
            </Button>
            <Button
              variant={!sharp ? "contained" : "outlined"}
              onClick={() => setSharp(false)}
            >
              ♮ Major
            </Button>
          </ButtonGroup>
        </Grid>
      </Grid>
      <Grid item container justify="center" xs={12} md={6}>
        <Grid item xs={12} style={{ position: "relative", top: "1.1rem" }}>
          <Button
            variant="outlined"
            color="primary"
            size="large"
            onClick={() => submitHandler()}
          >
            Generate
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Selector;
