import {
  SET_FILTER,
  GET_POKELIST,
  GET_POKELIST_SUCCESS,
  GET_POKEMON_DETAIL,
  GET_POKEMON_DETAIL_SUCCESS
} from "../actions";
import axios from "axios";
import { API_URL } from "../../constants";

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
        data: data.results,
        page
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

export const setFilter = filter => dispatch =>
  dispatch({
    type: SET_FILTER,
    payload: {
      filter
    }
  });