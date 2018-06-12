import React, { Component } from "react";
import { Route, Switch } from "react-router";

import Layout from "./components/layout/layout";
import Example from "./components/example/example";

import Pokedex from "./components/pokedex/pokedex";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route exact path="/pokedex" component={Pokedex} />
          <Route exact path="/example" component={Example} />
          <Route path="/example/:id" component={Example} />
        </Switch>
      </Layout>
    );
  }
}

export default App;
