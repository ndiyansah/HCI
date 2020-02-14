import {
  GET_POKELIST,
  GET_POKELIST_AND_RESET,
  GET_POKELIST_SUCCESS,
  GET_POKEMON_DETAIL,
  GET_POKEMON_DETAIL_SUCCESS,
  SET_FILTER
} from "../actions";

const initialState = {
  isLoading: false,
  hasError: false,
  errorMessage: "",
  data: [],
  pagination: {
    currentPage: 1,
    hasNext: false,
    total: 0
  },
  filter: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_POKELIST:
      return {
        ...state,
        isLoading: true,
        hasError: false
      };
    case GET_POKELIST_AND_RESET:
      return {
        ...state,
        data: [],
        isLoading: true,
        hasError: false
      };
    case GET_POKELIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data:
          state.data.length <= 0 ||
          // state.list.pagination.currentPage !== action.payload.page ||
          state.pagination.currentPage < action.payload.page
            ? state.data.concat(action.payload.data)
            : state.data,
        pagination: {
          ...state.pagination,
          hasNext: action.payload.hasNext,
          currentPage: action.payload.page,
          total: action.payload.total
        }
      };
    case GET_POKEMON_DETAIL:
      return {
        ...state,
        data: state.data.map((item, index) => {
          if (index === action.payload.id) {
            return {
              ...item,
              isLoading: true
            };
          }

          return item;
        })
      };
    case GET_POKEMON_DETAIL_SUCCESS:
      return {
        ...state,
        data: state.data.map((item, index) => {
          if (index === action.payload.id) {
            return {
              ...item,
              isLoading: false,
              ...action.payload.data
            };
          }

          return item;
        })
      };
    case SET_FILTER:
      return {
        ...state,
        filter: action.payload.filter
      };
    default:
      return state;
  }
};
