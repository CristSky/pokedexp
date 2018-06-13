import React from "react";
import { Table, TableBody } from "@material-ui/core";

import { DetailRow } from "./detail-row";

const attributes = [
  { key: "abilities", keyName: "ability", label: "Abilities" },
  { key: "stats", keyName: "stat", label: "Stats" },
  { key: "held_items", keyName: "item", label: "Items" },
  { key: "game_indices", keyName: "version", label: "Game versions" },
  { key: "moves", keyName: "move", label: "Moves" }
];

export const PokemonDetails = props => {
  const { pokemon = {} } = props;

  console.log(props);
  return (
    <Table>
      <TableBody>
        {attributes.map((item, i) => (
          <DetailRow key={i} items={pokemon[item.key]} {...item} />
        ))}
      </TableBody>
    </Table>
  );
};
