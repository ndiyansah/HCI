import axios from "axios";
import { API_URL } from "../constants";

export const GET_POKELIST = `GET_POKELIST`;
export const GET_POKELIST_SUCCESS = `GET_POKELIST_SUCCESS`;

export const GET_POKEMON_DETAIL = `GET_POKEMON_DETAIL`;
export const GET_POKEMON_DETAIL_SUCCESS = `GET_POKEMON_DETAIL_SUCCESS`;

export const GET_POKEMON_TYPE = `GET_POKEMON_TYPE`;
export const GET_POKEMON_TYPE_SUCCESS = `GET_POKEMON_TYPE_SUCCESS`;
export const GET_POKEMON_TYPE_FAIL = `GET_POKEMON_TYPE_FAIL`;

export const GET_POKELIST_AND_RESET = `GET_POKELIST_AND_RESET`;


export const getPokemonList = (page = 1) => async dispatch => {
  dispatch({
    type: GET_POKELIST
  });

  try {
    const offset = (page - 1) * 20;

    const response = await axios.get(`${API_URL}/pokemon`, {
      params: {
        offset,
        limit: 20
      }
    });

    const { data } = response;

    dispatch({
      type: GET_POKELIST_SUCCESS,
      payload: {
        total: data.count,
        hasNext: !!data.next,
        data: data.results
      }
    });
  } catch (e) {}
};

export const getPokemon = (id, name) => async dispatch => {
  dispatch({
    type: GET_POKEMON_DETAIL,
    payload: {
      id
    }
  });

  try {
    const response = await axios.get(`${API_URL}/pokemon/${name}/`);

    const { data } = response;

    dispatch({
      type: GET_POKEMON_DETAIL_SUCCESS,
      payload: {
        id,
        data
      }
    });
  } catch (e) {}
};

export const getPokemonTypes = () => async dispatch => {
  dispatch({
    type: GET_POKEMON_TYPE
  });
  try {
    const response = await axios.get(`${API_URL}/type/`);

    const { data } = response;

    dispatch({
      type: GET_POKEMON_TYPE_SUCCESS,
      payload: {
        data: data.results
      }
    });
  } catch (e) {}
};

export const getPokemonByType = type => async dispatch => {
  dispatch({
    type: GET_POKELIST_AND_RESET

  });

  try {
    const response = await axios.get(`${API_URL}/type/${type}`);

    const { data } = response;

    dispatch({
      type: GET_POKELIST_SUCCESS,
      payload: {
        total: data.pokemon.length,
        hasNext: false,
        data: data.pokemon.map(item => item.pokemon)
      }
    });
  } catch (e) {}
};