import { ADD_CART, ADD_PRODUCT } from "./ActionTypes";
import initialState from "./initialState";

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return { ...state, products: [...state.products, action.payload] };

    case ADD_CART:
      //Checkt the items data from product
      const item = state.products.find((p) => p.id === action.payload.id);

      //Check if the product in cart is already
      const check = state.cartProducts.find((pr) =>
        pr.id === action.payload.id ? true : false
      );

      const newProducts = state.products.map((pd) => {
        if (pd.id === action.payload.id) {
          pd.quantity = pd.quantity - 1;
          return pd;
        }
        return pd;
      });

      return {
        ...state,
        products: newProducts,
        cartProducts: check
          ? state.cartProducts.map((itm) =>
              itm.id === action.payload.id
                ? {
                    ...itm,
                    qty: itm.qty + 1,
                    quantity: parseInt(itm.quantity) - 1,
                  }
                : itm
            )
          : [
              ...state.cartProducts,
              { ...item, qty: 1, quantity: parseInt(item.quantity) - 1 },
            ],
      };

    default:
      return state;
  }
};

export default Reducer;
