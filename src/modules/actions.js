import axios from "axios";
import { API_URL } from "../constants";

export const GET_POKELIST = `GET_POKELIST`;
export const GET_POKELIST_SUCCESS = `GET_POKELIST_SUCCESS`;

export const getPokemonList = (page = 1) => dispatch =>
  new Promise(async (resolve, reject) => {
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
  });
