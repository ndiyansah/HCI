import {
  GET_POKEMON_DETAIL_PAGE,
  GET_POKEMON_DETAIL_PAGE_SUCCESS
} from "../actions";

const initialState = {
  isLoading: false,
  hasError: false,
  errorMessage: "",
  data: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMON_DETAIL_PAGE:
      return {
        ...state,
        isLoading: true,
        hasError: false
      };
    case GET_POKEMON_DETAIL_PAGE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload.data
      };
    default:
      return state;
  }
};