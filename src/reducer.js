export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

export const initialState = {
  basket: [],
  user: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      //logic to add item to basket
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
      //logic to remove item from basket
      let newBasket = [...state.basket];

      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      if (index >= 0) {
        //item is in basket, remove it
        newBasket.splice(index, 1);
      } else {
        console.warn(
          ` Can't remove product (id: ${action.id}) as it is not present in cart`
        );
      }

      return { ...state, basket: newBasket };
    case "SET_LOGIN":
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};
export default reducer;
