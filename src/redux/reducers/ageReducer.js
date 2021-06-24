const ageReducer = (state = false, action) => {
  switch (action.type) {
    case 'GREATER_18':
      return (state = true);
    case 'LESS_18':
      return (state = false);
    default:
      return state;
  }
};

export default ageReducer;
