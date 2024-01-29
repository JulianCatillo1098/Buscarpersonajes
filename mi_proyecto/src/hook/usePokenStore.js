import axios from "axios";
import { datosPokemon, pagina } from "../store/pokemonSlice";
import { useDispatch } from "react-redux";

export const usePokenStore = () => {

  const dispatch = useDispatch();


  const cargarLosPokemones = async (numero) => {

    try {
      const { data } = await axios.get(
        `https://rickandmortyapi.com/api/character/?page=${numero}`
      );
      dispatch(datosPokemon(data.results));
    } catch (error) {
      console.log("Error al cargar los pokemones:", error);
    }
  };

  const ponerPaginaActual = (numero) => {
    try {
      dispatch(pagina(numero));
    } catch (error) {
      console.log("Error al poner la página actual:", error);
    }
  };
  const datosFiltradosPorNombre = (data) => {
    try {
      dispatch(datosPokemon(data));
    } catch (error) {
      console.log("Error al cargar los pokemones:", error);
    }
  };

  return {
    cargarLosPokemones,
    ponerPaginaActual,
    datosFiltradosPorNombre
    
  };
};
