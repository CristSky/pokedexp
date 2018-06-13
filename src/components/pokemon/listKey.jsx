import React, { Fragment } from "react";
import { Grid, Typography, Chip } from "@material-ui/core";

const typesColors = {
  poison: "purple",
  grass: "green",
  fire: "orange",
  bug: "darkgreen",
  dragon: "black",
  fairy: "pink",
  ghost: "MediumPurple",
  ground: "saddlebrown",
  normal: "gray",
  psychic: "Orchid",
  steel: "darkgray",
  dark: "black",
  electric: "Gold",
  fighting: "Maroon",
  flying: "MidnightBlue",
  ice: "LightSeaGreen",
  rock: "SlateGray",
  water: "RoyalBlue"
};
const typeStyle = type => ({
  color: "white",
  textTransform: "uppercase",
  fontWeight: 500,
  backgroundColor: typesColors[type] ? typesColors[type] : "darkgray"
});

export const ListKey = props => {
  const { keyName, items = [], label } = props;

  return items.length ? (
    <Fragment>
      <Grid
        container
        spacing={16}
        alignItems="center"
        direction="row"
        justify="center"
      >
        <Grid item>
          <Typography variant="headline" align="center">
            {label}:
          </Typography>
        </Grid>
        {items.map((item, i) => (
          <Grid item key={i}>
            <Chip
              style={typeStyle(item[keyName].name)}
              label={item[keyName].name}
            />
          </Grid>
        ))}
      </Grid>
    </Fragment>
  ) : null;
};
