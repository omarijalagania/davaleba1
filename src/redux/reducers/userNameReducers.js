const userNameReducers = (state = false, action) => {
  switch (action.type) {
    case 'MAX':
      return (state = true);
    case 'MIN':
      return (state = false);
    default:
      return state;
  }
};

export default userNameReducers;
