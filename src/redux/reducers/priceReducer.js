const initialState = {
  prices: [],
};

const priceReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PRICE':
      return {
        ...state,
        prices: action.payload,
      };
    default:
      return { ...state };
  }
};

export default priceReducer;
