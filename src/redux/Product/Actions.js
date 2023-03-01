import { ADD_CART, ADD_PRODUCT, MINUS, PLUS } from "./ActionTypes";

export const add_product = (data) => {
  return {
    type: ADD_PRODUCT,
    payload: data,
  };
};

export const add_to_cart = (id) => {
  return {
    type: ADD_CART,
    payload: {
      id,
    },
  };
};

export const plus = (id) => {
  return {
    type: PLUS,
    payload: {
      id,
    },
  };
};

export const minus = (id) => {
  return {
    type: MINUS,
    payload: {
      id,
    },
  };
};
