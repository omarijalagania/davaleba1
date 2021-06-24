const emailToolTip = (state = false, action) => {
  switch (action.type) {
    case 'VALID_EMAIL':
      return (state = true);
    case 'INVALID_EMAIL':
      return (state = false);
    default:
      return state;
  }
};

export default emailToolTip;
