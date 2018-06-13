import React, { Component } from "react";
import {
  Typography,
  Grid,
  Table,
  TableBody,
  TableRow,
  TableCell
} from "@material-ui/core";
import store from "../../store";
import { fetchPokemon } from "../../store/reducers/pokemon";
import { PokeLoading } from "../loading/pokeBallSpiner";

import { PokemonSprites } from "./sprites";
import { PokemonDetails } from "./details";
import { ListKey } from "./listKey";

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
    const { loading, pokemon } = this.state;

    return loading ? (
      <PokeLoading />
    ) : (
      <Grid
        container
        spacing={64}
        alignItems="flex-start"
        direction="row"
        justify="center"
      >
        <Grid item xs={12}>
          <Typography
            className="pokemon-name-captalize"
            variant="display2"
            align="center"
          >
            {pokemon.id} - {pokemon.name}
          </Typography>
          <PokemonSprites sprites={pokemon.sprites} />
          <ListKey items={pokemon.types} keyName="type" label="Type" />
        </Grid>

        <Grid item xs={12} md={6} lg={6}>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell component="th" variant="head">
                  Height:
                </TableCell>
                <TableCell numeric>{pokemon.height / 10} m</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" variant="head">
                  Weight:
                </TableCell>
                <TableCell numeric>{pokemon.weight / 10} kg</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" variant="head">
                  Base experience:
                </TableCell>
                <TableCell numeric>{pokemon.base_experience}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Grid>

        <Grid item xs={12} md={6} lg={6}>
          <PokemonDetails pokemon={pokemon} />
        </Grid>
      </Grid>
    );
  }
}

export default Pokemon;
