import axios from "axios";

const BASE_API = "https://pokeapi.co/api/v2/pokemon/";
const POKEMON = {
  GET_POKEMON: "GET_POKEMON"
};

export const fetchPokemon = idOrName => dispatch =>
  axios
    .get(`${BASE_API}${idOrName}`)
    .then(response => dispatch(getPokemon(response.data)))
    .catch(console.error);

const getPokemon = payload => ({ type: POKEMON.GET_POKEMON, payload });

export const pokemon = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case POKEMON.GET_POKEMON:
      return payload;

    default:
      return state;
  }
};
