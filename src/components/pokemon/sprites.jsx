import React from "react";
import { Grid } from "@material-ui/core";

export const PokemonSprites = props => {
  const { sprites = {} } = props;
  const keys = Object.keys(sprites);
  return (
    <Grid
      container
      spacing={16}
      alignItems="center"
      direction="row"
      justify="center"
    >
      {keys.map(
        key =>
          sprites[key] ? <img src={sprites[key]} alt={key} key={key} /> : null
      )}
    </Grid>
  );
};
