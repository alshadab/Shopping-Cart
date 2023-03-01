import { ADD_CART, ADD_PRODUCT } from "./ActionTypes";

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

export default add_product;
