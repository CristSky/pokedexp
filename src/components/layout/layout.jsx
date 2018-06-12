import React, { Component, Fragment } from "react";
import { AppBar } from "@material-ui/core";

import "./layout.css";

class Layout extends Component {
  render() {
    return (
      <Fragment>
        <AppBar position="fixed">
          <h1 className="title">PokedeXP</h1>
        </AppBar>
        <article className="content">{this.props.children}</article>
      </Fragment>
    );
  }
}

export default Layout;
