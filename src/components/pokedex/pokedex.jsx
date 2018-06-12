import React, { Component } from "react";
import { push } from "react-router-redux";
import queryString from "query-string";
import store from "../../store";
import { fetchPokemonsList } from "../../store/reducers/pokedex.js";
import { PokedexList } from "./list";
import { PokeLoading } from "../loading/pokeBallSpiner";
import "./pokedex.css";

class Pokedex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      limit: 20,
      offset: 0,
      spritesBaseURL: "https://raw.githubusercontent.com",
      spritesPath: "/PokeAPI/sprites/master/sprites/pokemon/",
      pokedex: {},
      loading: true
    };
  }

  componentDidMount() {
    const params = queryString.parse(this.props.location.search);
    const limit = params.limit ? parseInt(params.limit, 10) : 20;
    const offset = params.offset ? parseInt(params.offset, 10) : 0;
    this.unsubscribe = store.subscribe(() =>
      this.setState(Object.assign({}, store.getState(), { loading: false }))
    );
    this.setLimitOffset({ limit, offset });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  setLimitOffset = ({ limit, offset }) => {
    store.dispatch(push(`/pokedex?limit=${limit}&offset=${offset}`));
    this.setState({ limit, offset }, this.listPokemons());
  };

  setLoading = (loading, cb = () => {}) => this.setState({ loading }, cb);

  listPokemons = () =>
    this.setLoading(true, () => store.dispatch(fetchPokemonsList(this.state)));

  nextPage = () => {
    const { pokedex, limit, offset } = this.state;
    const { count } = pokedex;
    const nextOffset = offset + limit >= count ? count - limit : limit + offset;
    this.setLimitOffset({ limit, offset: nextOffset });
  };

  backPages = () => {
    const { limit, offset } = this.state;
    const backOffset = offset - limit > 0 ? offset - limit : 0;
    this.setLimitOffset({ limit, offset: backOffset });
  };

  selectPokemon = idOrName => store.dispatch(push(`/pokemon/${idOrName}`));

  render() {
    const { loading } = this.state;
    return loading ? (
      <PokeLoading />
    ) : (
      <PokedexList
        {...this.state}
        nextPage={this.nextPage}
        backPages={this.backPages}
        selectPokemon={this.selectPokemon}
      />
    );
  }
}

export default Pokedex;
