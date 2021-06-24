const surNameReducer = (state = false, action) => {
  switch (action.type) {
    case 'SHORT':
      return (state = true);
    case 'LONG':
      return (state = false);
    default:
      return state;
  }
};

export default surNameReducer;
