import React, { Component } from "react";

class Layout extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>PokedeXP</h1>
        </header>
        <article>{this.props.children}</article>
      </div>
    );
  }
}

export default Layout;
