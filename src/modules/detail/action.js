import axios from "axios";
import { API_URL } from "../../constants";
import {
  GET_POKEMON_DETAIL_PAGE,
  GET_POKEMON_DETAIL_PAGE_SUCCESS
} from "../actions";

export const getPokemonDetailPage = name => async dispatch => {
  dispatch({
    type: GET_POKEMON_DETAIL_PAGE
  });
  try {
    const pokemon = await axios.get(`${API_URL}/pokemon/${name}`);
    const specie = await axios.get(`${API_URL}/pokemon-species/${name}`);

    const pokemonData = pokemon.data;
    const specieData = specie.data;

    dispatch({
      type: GET_POKEMON_DETAIL_PAGE_SUCCESS,
      payload: {
        data: pokemonData,
        specie: specieData
      }
    });
  } catch (e) {}
};