import React from "react";
import Header from "./Components/Header";
import GeneratorForm from "./Components/GeneratorForm";
import ChordTable from "./Components/ChordTable";

// MaterialUI imports
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "0 2rem 0 2rem",
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <main>
      <Header />
      <div className={classes.root}>
        <GeneratorForm />
        <ChordTable />
      </div>
    </main>
  );
};

export default App;
