const initialState = {
  list: {
    isLoading: false,
    hasError: false,
    errorMessage: "",
    data: [],
    pagination: {
      currentPage: 0,
      perPage: 10
    }
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
