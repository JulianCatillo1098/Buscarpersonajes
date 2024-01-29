import { Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { validarNombre } from "../Validaciones/Validar";
import { useSelector } from "react-redux";
import { usePokenStore } from "../hook/usePokenStore";

export const BuscarNombre = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const { datos } = useSelector((state) => state.pokemons) ?? { datos: [] };
  const {datosFiltradosPorNombre} = usePokenStore();
  
 
  const funcionSubmit = (letras) => {
    const nuevaArray = datos.filter(objeto => objeto.name.toLowerCase().includes(letras.nombre.toLowerCase()));
    datosFiltradosPorNombre(nuevaArray)
  
  };

  return (
    <>
      <Grid container justifyContent="center" alignItems="center">
        <Grid
          item
          xs={12}
          md={12}
          marginTop={5}
          style={{ textAlign: "center" }}
        >
          <form onSubmit={handleSubmit(funcionSubmit)}>
            <Grid item xs={12} md={12}>
              <Typography variant="h7" gutterBottom>
                Nombre del personaje
              </Typography>
            </Grid>

            <Grid item xs={12} md={12} marginTop={3}>
              <TextField
                type="text"
                {...register("nombre", {
                  required: true,
                  validate: validarNombre,
                })}
              ></TextField>
              {errors.nombre && (
                <Grid item xs={12} md={12} marginTop={3}>
                  <Typography variant="body2" color="red">
                    Ecribe como minimo tres caracteres para realizar la busqueda 
                  </Typography>
                </Grid>
              )}
              <Grid item xs={12} md={12} marginTop={3}>
                <Button
                  xs={12}
                  md={6}
                  variant="contained"
                  color="primary"
                  type="submit"
                  style={{ margin: "10px" }}
                >
                  Buscar
                </Button>
              </Grid>
            </Grid>
          </form>
          
      <hr></hr>
        </Grid>
        
      </Grid>
    </>
  );
};
