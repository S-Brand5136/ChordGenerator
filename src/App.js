import React from "react";
import Header from "./Components/Header";
import GeneratorForm from "./Components/GeneratorForm";
import ChordTable from "./Components/ChordTable";

// MaterialUI imports
import { createMuiTheme, ThemeProvider, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "0 2rem 0 2rem",
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#ed4b82",
      dark: "#a31545",
      main: "#e91e63",
      contrastText: "#fff",
    },
    secondary: {
      light: "#33eb91",
      dark: "#00a152",
      main: "#00e676",
      contrastText: "#FFF",
    },
    text: {
      primary: "#FFF",
      secondary: "#FFF",
    },
  },
});

const App = () => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <main>
        <Header />
        <div className={classes.root}>
          <GeneratorForm />
          <ChordTable />
        </div>
      </main>
    </ThemeProvider>
  );
};

export default App;
