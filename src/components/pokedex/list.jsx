import React from "react";
// import { Link } from "react-router-dom";
import {
  Button,
  List,
  ListItem,
  ListItemText,
  Avatar
} from "@material-ui/core";

export const PokedexList = props => {
  const {
    pokedex,
    limit,
    offset,
    nextPage,
    backPages,
    selectPokemon,
    spritesBaseURL,
    spritesPath
  } = props;
  const { count = 0, results = [] } = pokedex;
  const imgBaseSrc = spritesBaseURL + spritesPath;

  return (
    <div>
      <h3>
        Pokemons list {offset} - {offset + limit} of {count}
      </h3>
      <Button variant="outlined" disabled={offset === 0} onClick={backPages}>
        Back
      </Button>
      <Button
        variant="outlined"
        disabled={offset + limit >= count}
        onClick={nextPage}
      >
        Next
      </Button>
      <List>
        {results.map((pokemon, i) => (
          <ListItem key={i} button onClick={() => selectPokemon(pokemon.name)}>
            <Avatar>
              <img
                src={`${imgBaseSrc}${i + offset + 1}.png`}
                alt={pokemon.name}
              />
            </Avatar>
            <ListItemText primary={pokemon.name} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};
