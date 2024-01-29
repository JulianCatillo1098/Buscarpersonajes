import React from "react";
import { useSelector } from "react-redux";
import { usePokenStore } from "../hook/usePokenStore";
import { Button, Grid } from "@mui/material";

export const BotonesCambio = () => {

  const { ponerPaginaActual, cargarLosPokemones } = usePokenStore();
  const { paginaActual } = useSelector((state) => state.pokemons);

  const cambiarSiguientePagina = () => {
    let avanzarPagina = paginaActual + 1;
    if (avanzarPagina <= 42) {
      ponerPaginaActual(avanzarPagina);
      cargarLosPokemones(avanzarPagina);
    } else {
      let avanzarPagina = 1;
      ponerPaginaActual(avanzarPagina);
      cargarLosPokemones(avanzarPagina);
    }
  };

  const cambiarAnteriorPagina = () => {
    let retrocederPagina = paginaActual - 1;
    if (retrocederPagina >= 1) {
      ponerPaginaActual(retrocederPagina);
      cargarLosPokemones(retrocederPagina);
    } else {
      let retrocederPagina = 42;
      ponerPaginaActual(retrocederPagina);
      cargarLosPokemones(retrocederPagina);
    }
  };
  return (
    <>
      <Grid container justifyContent="center" alignItems="center">
        <Button
          xs={12}
          md={6}
          variant="contained"
          color="primary"
          style={{ margin: "10px" }}
          onClick={cambiarAnteriorPagina}
        >
          Anterior
        </Button>
        <Button
          xs={12}
          md={6}
          variant="contained"
          color="primary"
          style={{ margin: "10px" }}
          onClick={cambiarSiguientePagina}
        >
          Siguiente
        </Button>
      </Grid>
    </>
  );
};
