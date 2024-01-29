import { Button, Grid, TextField, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { CuadrosPokemon } from "./CuadrosPokemon";
import { BotonesCambio } from "./BotonesCambio";
import { useNavigate } from "react-router-dom";
import { BuscarNombre } from "./BuscarNombre";

export const TodosLosPokemones = () => {
  const { datos } = useSelector((state) => state.pokemons) ?? { datos: [] };

  const navigate = useNavigate();

  const funcionVolverFormulario = () => {
    navigate("/");
  };

  return (
    <>
      <Grid container alignItems="center">
        {datos.length > 0 ? (
          <>
            <BuscarNombre />
            <BotonesCambio />

            {datos.map((dato) => (
              <CuadrosPokemon key={dato.id} data={dato} />
            ))}
            <BotonesCambio />
          </>
        ) : (
          <>
            <Grid container justifyContent="center" alignItems="center">
              <Grid
                item
                xs={12}
                md={12}
                marginTop={3}
                style={{ textAlign: "center" }}
              >
                <Typography variant="body2" color="red">
                  No hay datos disponibles.
                </Typography>
              </Grid>
              <Grid item xs={12} md={12} marginTop={3} style={{ textAlign: "center" }}>
                <Button
                  xs={12}
                  md={6}
                  variant="contained"
                  color="primary"
                  style={{ margin: "10px" }}
                  onClick={funcionVolverFormulario}
                >
                  Volver
                </Button>
              </Grid>
            </Grid>
          </>
        )}
      </Grid>
    </>
  );
};
