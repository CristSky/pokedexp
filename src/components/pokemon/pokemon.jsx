import React, { Component } from "react";
import store from "../../store";
import { fetchPokemon } from "../../store/reducers/pokemon";
import { PokeLoading } from "../loading/pokeBallSpiner";
// import "./pokedex.css";

class Pokemon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: {},
      loading: true
    };
  }

  componentDidMount() {
    const { idOrName } = this.props.match.params;
    this.unsubscribe = store.subscribe(() =>
      this.setState(Object.assign({}, store.getState(), { loading: false }))
    );
    this.getPokemonDetails(idOrName);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  setLoading = (loading, cb = () => {}) => this.setState({ loading }, cb);

  getPokemonDetails = idOrName =>
    this.setLoading(true, () => store.dispatch(fetchPokemon(idOrName)));

  render() {
    const { loading } = this.state;
    return loading ? (
      <PokeLoading />
    ) : (
      <pre>{JSON.stringify(this.state.pokemon)}</pre>
    );
  }
}

export default Pokemon;
