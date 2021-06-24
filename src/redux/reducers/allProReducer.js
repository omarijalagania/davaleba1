const initialState = {
  all: [],
};

const allProReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ALL_PRODUCTS':
      return {
        ...state,
        all: [...state.all, action.payload],
      };

    case 'REMOVE':
      return {
        ...state,
        all: [...action.payload],
      };
    default:
      return { ...state };
  }
};

export default allProReducer;
