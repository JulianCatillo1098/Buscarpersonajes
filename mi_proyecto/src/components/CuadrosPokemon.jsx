import React from "react";
import { Card, Grid, Link, Typography } from "@mui/material";

export const CuadrosPokemon = ({ data }) => {
  return (
    <Grid item md={4} xs={12} padding={1}>
      <Card>
          <Grid item margin={3}>
            <Typography variant="h4" align="center">
              {data.name}
            </Typography>
          </Grid>

          <Grid item margin={3}>
            <Typography variant="h7" >
            <Link href={data.url} target="_blank" rel="noopener noreferrer" align="center">
            <img
              src={data.image}
              alt={data.name}
              style={{ display: "block", margin: "auto" }}
            />

            </Link>
            </Typography>
        </Grid>
      </Card>
    </Grid>
  );
};
