import React, { Component } from "react";
import { Route, Switch } from "react-router";

import Layout from "./components/layout/layout";
import Pokedex from "./components/pokedex/pokedex";
import Pokemon from "./components/pokemon/pokemon";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route exact path="/pokedex" component={Pokedex} />
          <Route path="/pokemon/:idOrName" component={Pokemon} />
          <Route exact path="*" component={Pokedex} />
        </Switch>
      </Layout>
    );
  }
}

export default App;
