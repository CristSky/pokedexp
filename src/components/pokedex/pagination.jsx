import React from "react";
import { Button, Grid, Typography, Icon } from "@material-ui/core";

export const Pagination = props => {
  const { limit, offset, count, nextPage, backPages } = props;

  return (
    <Grid item xs={12} style={{ padding: 16 }}>
      <Grid
        container
        spacing={16}
        alignItems="baseline"
        direction="row"
        justify="flex-end"
      >
        <Grid item>
          <Typography variant="subheading" align="center">
            Pokemons list: {offset} - {offset + limit} of {count}
          </Typography>
        </Grid>
        <Grid item>
          <Button
            size="small"
            variant="outlined"
            disabled={offset === 0}
            onClick={backPages}
          >
            <Icon>arrow_back</Icon>
          </Button>
        </Grid>
        <Grid item>
          <Button
            size="small"
            variant="outlined"
            disabled={offset + limit >= count}
            onClick={nextPage}
          >
            <Icon>arrow_forward</Icon>
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};
