import { configureStore } from "@reduxjs/toolkit";
import { pokemonsSlice } from "./pokemonSlice";

export const store = configureStore({
  reducer: {
    pokemons: pokemonsSlice.reducer,
  },
});
