import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  basketItems: [],
  counter: 0,
  totalPrice: 0,
};

const BasketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket(state, action) {
      let productId = action.payload.id;
      let productIndex = state.basketItems.findIndex(
        (item) => item.id === productId
      );
      state.totalPrice += action.payload.price;
      

      if (productIndex >= 0) {
        state.basketItems[productIndex].quantity++;
        state.basketItems[productIndex].totalItemPrice += action.payload.price;
      } else {
        state.basketItems.push(action.payload);
        state.counter++;
      }
     
    },
    increaseQuantity(state, action) {
      let productId = action.payload;
      let productIndex = state.basketItems.findIndex(
        (item) => item.id === productId
      );
      state.totalPrice += state.basketItems[productIndex].price;
      state.basketItems[productIndex].quantity++;
      state.basketItems[productIndex].totalItemPrice +=
        state.basketItems[productIndex].price;

    },
    decreseQuantity(state, action) {
      let productId = action.payload;

      let productIndex = state.basketItems.findIndex((item) => {
        return item.id === productId;
      });
      
      state.totalPrice -= state.basketItems[productIndex].price;

      if (state.basketItems[productIndex].quantity === 1) {
        state.basketItems.splice(productIndex, 1);
        state.counter--;
      } else {
        state.basketItems[productIndex].quantity--;
        state.basketItems[productIndex].totalItemPrice -=
          state.basketItems[productIndex].price;
      }
     
    },
    clearItemFromBasket(state, action) {
      let productId = action.payload;

      let productIndex = state.basketItems.findIndex((item) => {
        return item.id === productId;
      });
      
      state.totalPrice -= state.basketItems[productIndex].totalItemPrice;
      state.basketItems.splice(productIndex, 1);
      state.counter--;
      
    },
    clearAllBasket(state) {
      state.basketItems = [];
      state.counter = 0;
      state.totalPrice = 0;
      
    },
  },
});

export default BasketSlice;
