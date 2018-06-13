import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { AppBar, Paper, Typography, Toolbar } from "@material-ui/core";

import "./layout.css";

class Layout extends Component {
  render() {
    return (
      <Fragment>
        <AppBar position="fixed">
          <Toolbar>
            <Typography variant="display2" align="center" noWrap>
              <Link to="/" style={{ textDecoration: "none" }}>
                <span style={{ color: "white" }}>pokede</span>
                <span style={{ color: "black" }}>xp</span>
              </Link>
            </Typography>
          </Toolbar>
        </AppBar>
        <article className="content">
          <Paper className="content-padding">{this.props.children}</Paper>
        </article>
      </Fragment>
    );
  }
}

export default Layout;
