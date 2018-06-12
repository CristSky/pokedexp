import React, { Component } from "react";
import queryString from "query-string";
import store from "../../store";
import { fetchPokemonsList } from "../../store/reducers/pokedex.js";

class Pokedex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokedex: {},
      loading: true
    };
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState(Object.assign({}, store.getState(), { loading: false }));
    });
    const params = queryString.parse(this.props.location.search);
    this.listPokemons(params);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  setLoading = (loading, cb = () => {}) => this.setState({ loading }, cb);

  listPokemons = ({ limit, offset }) =>
    this.setLoading(true, () =>
      store.dispatch(fetchPokemonsList({ limit, offset }))
    );

  render() {
    const { results = [], count = 0 } = this.state.pokedex;
    console.log(this.props);
    return (
      <div>
        <h3>Pokemons list</h3>
      </div>
    );
  }
}

export default Pokedex;
