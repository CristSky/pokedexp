import React, { Fragment } from "react";
import { Pagination } from "./pagination";
import {
  List,
  ListItem,
  ListItemText,
  Avatar,
  Divider
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
    <Fragment>
      <Pagination {...{ limit, offset, count, nextPage, backPages }} />
      <List>
        <Divider />
        {results.map((pokemon, i) => [
          <ListItem key={i} button onClick={() => selectPokemon(pokemon.name)}>
            <Avatar>
              <img
                src={`${imgBaseSrc}${i + offset + 1}.png`}
                alt={pokemon.name}
              />
            </Avatar>
            <ListItemText
              className="pokemon-name-captalize"
              primary={pokemon.name}
            />
          </ListItem>,
          <Divider key={`divider${i}`} inset component="li" />
        ])}
      </List>
      <Pagination {...{ limit, offset, count, nextPage, backPages }} />
    </Fragment>
  );
};
