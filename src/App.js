import React, { Component } from "react";
import { Route, Switch } from "react-router";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { red, indigo } from "@material-ui/core/colors";

import Layout from "./components/layout/layout";
import Pokedex from "./components/pokedex/pokedex";
import Pokemon from "./components/pokemon/pokemon";

import "./App.css";

const theme = createMuiTheme({
  palette: {
    primary: red,
    secondary: indigo
  }
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Layout>
          <Switch>
            <Route exact path="/pokedex" component={Pokedex} />
            <Route path="/pokemon/:idOrName" component={Pokemon} />
            <Route exact path="*" component={Pokedex} />
          </Switch>
        </Layout>
      </MuiThemeProvider>
    );
  }
}

export default App;
