import { createSlice } from "@reduxjs/toolkit";

export const pokemonsSlice = createSlice({
  name: "STORE",
  initialState: {
    datos: {},
    paginaActual: 0,
    cargandoDatos: true,
  },

  reducers: {
    datosPokemon: (state, { payload }) => {
      state.cargandoDatos = false;
      state.datos = payload;
    },
    pagina: (state, { payload }) => {
      state.cargandoDatos = false;
      state.paginaActual=payload
    },
   
  },
});

export const { datosPokemon, pagina, } = pokemonsSlice.actions;
