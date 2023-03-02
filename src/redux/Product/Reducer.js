import { ADD_CART, ADD_PRODUCT, DELETE, MINUS, PLUS } from "./ActionTypes";
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
                  quantity: Number(itm.quantity) - 1,
                }
              : itm
          )
        : [
            ...state.cartProducts,
            { ...item, qty: 1, quantity: Number(item.quantity) - 1 },
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
    case MINUS:
      //Check if the product in cart is already
      const minus_check = state.cartProducts.find((pr) =>
        pr.id === action.payload.id ? true : false
      );

      const minus_newProducts = state.products.map((pd) => {
        if (pd.id === action.payload.id) {
          pd.quantity = pd.quantity + 1;
          return pd;
        }
        return pd;
      });
      const minus_newValue = state.cartProducts.reduce((prev, next) => {
        return prev + next.qty;
      }, -1);
      return {
        ...state,
        products: minus_newProducts,

        cartProducts: minus_check
          ? state.cartProducts.map((itm) =>
              itm.id === action.payload.id
                ? {
                    ...itm,
                    qty: itm.qty - 1,
                    quantity: Number(itm.quantity) + 1,
                  }
                : itm
            )
          : console.log("Item not found"),
        totalValue: minus_newValue,
      };

    case DELETE:
      const filterProducts = state.cartProducts.filter(
        (p_data) => p_data.id !== action.payload.id
      );

      const del_newProducts = state.products.map((pd) => {
        if (pd.id === action.payload.id) {
          pd.quantity = pd.quantity + action.payload.value;
          return pd;
        }
        return pd;
      });
      const del_newValue = filterProducts.reduce((prev, next) => {
        return prev + next.qty;
      }, 0);
      return {
        ...state,
        products: del_newProducts,
        cartProducts: filterProducts,

        totalValue: del_newValue,
      };

    default:
      return state;
  }
};

export default Reducer;
