export const emailChange = () => {
  return {
    type: 'VALID_EMAIL',
  };
};

export const userChange = () => {
  return {
    type: 'MIN',
  };
};

export const productName = (value) => {
  return {
    type: 'ADD_PRODUCT',
    payload: value,
  };
};
