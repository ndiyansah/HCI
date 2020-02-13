import { GET_POKELIST, GET_POKELIST_SUCCESS } from "./actions";

const initialState = {
  list: {
    isLoading: false,
    hasError: false,
    errorMessage: "",
    data: [],
    pagination: {
      currentPage: 0,
      hasNext: false,
      total: 0
    }
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_POKELIST:
      return {
        ...state,
        list: {
          ...state.list,
          isLoading: true,
          hasError: false
        }
      };
    case GET_POKELIST_SUCCESS:
      return {
        ...state,
        list: {
          ...state.list,
          isLoading: false,
          data: action.payload.data,
          pagination: {
            ...state.list.pagination,
            hasNext: action.payload.hasNext,
            currentPage: action.payload.page,
            total: action.payload.total
          }
        }
      };
    default:
      return state;
  }
};
