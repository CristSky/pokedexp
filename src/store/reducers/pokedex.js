import axios from "axios";

const BASE_API = "https://pokeapi.co/api/v2/pokemon/";
const POKEDEX = {
  LIST_POKEMONS: "LIST_POKEMONS"
};

export const fetchPokemonsList = ({ limit = 20, offset = 0 }) => dispatch =>
  axios
    .get(`${BASE_API}?limit=${limit}&offset=${offset}`)
    .then(response => dispatch(getPokemonsList(response.data)))
    .catch(console.error);

const getPokemonsList = payload => ({ type: POKEDEX.LIST_POKEMONS, payload });

export const pokedex = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case POKEDEX.LIST_POKEMONS:
      return payload;

    default:
      return state;
  }
};
