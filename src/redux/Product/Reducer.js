import { ADD_CART, ADD_PRODUCT, PLUS } from "./ActionTypes";
import initialState from "./initialState";

const Reducer = (state = initialState, action) => {
  const add = (id) => {
    //Checkt the items data from product
    const item = state.products.find((p) => p.id === id);

    //Check if the product in cart is already
    const check = state.cartProducts.find((pr) =>
      pr.id === id ? true : false
    );

    const newProducts = state.products.map((pd) => {
      if (pd.id === id) {
        pd.quantity = pd.quantity - 1;
        return pd;
      }
      return pd;
    });
    const newValue = state.cartProducts.reduce((prev, next) => {
      return prev + next.qty;
    }, 1);
    return {
      ...state,
      products: newProducts,

      cartProducts: check
        ? state.cartProducts.map((itm) =>
            itm.id === id
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
      totalValue: newValue,
    };
  };
  switch (action.type) {
    case ADD_PRODUCT:
      return { ...state, products: [...state.products, action.payload] };

    case ADD_CART:
      return add(action.payload.id);

    case PLUS:
      return add(action.payload.id);

    default:
      return state;
  }
};

export default Reducer;
