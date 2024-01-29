import React, { useEffect, useState } from "react";
import {
  Button,
  Typography,
  AppBar,
  Toolbar,
  Grid,
  TextField,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { validarNumeroMax, validarPaginacion } from "../Validaciones/Validar";
import { useNavigate } from "react-router-dom";
import { usePokenStore } from "../hook/usePokenStore";

function Formulario() {
  const { cargarLosPokemones, ponerPaginaActual } = usePokenStore();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ defaultValues: { numero: "" } });

  const navigate = useNavigate();

  const funcionSubmit = (data) => {
    const numero = parseInt(data.numero, 10);
    cargarLosPokemones(numero);
    ponerPaginaActual(numero);
    navigate("/todoslospokemones");
  };

  return (
    <Grid container justifyContent="center" alignItems="center">

      <AppBar position="static">
        <Toolbar>
          <Grid container justifyContent="center" alignItems="center">
            <Typography variant="h6">MI PROYECTO </Typography>
          </Grid>
        </Toolbar>
      </AppBar>

      <Grid item xs={12} md={12} marginTop={5} style={{ textAlign: "center" }}>

        <form onSubmit={handleSubmit(funcionSubmit)}>

          <Grid item xs={12} md={12}>
            <Typography variant="h7" gutterBottom>
              Numero de pagina que quieres ver :
            </Typography>
          </Grid>

          <Grid item xs={12} md={12} marginTop={3}>
            <TextField
              type="number"
              {...register("numero", {
                required: true,
                validate: validarNumeroMax,
              })}
            ></TextField>

            {errors.numero && (
              <Grid item xs={12} md={12} marginTop={3}>
                <Typography variant="body2" color="red">
                  escribe un numero del 1 al 42
                </Typography>
              </Grid>
            )}
          </Grid>

          <Grid item xs={12} md={12} marginTop={3}>
            <Button variant="contained" color="primary" type="submit">
              Buscar
            </Button>
          </Grid>

        </form>
        
      </Grid>
    </Grid>
  );
}

export default Formulario;
