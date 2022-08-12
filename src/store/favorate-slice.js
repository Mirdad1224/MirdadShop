import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorateItems: [],
};

const FavorateSlice = createSlice({
  name: "favorate",
  initialState,
  reducers: {
    initialFunction(state,action){
      state.favorateItems = action.payload
    },
    addToFavorate(state, action) {
      
      state.favorateItems.push(action.payload);
    },
    removeFromFavorate(state, action) {
      const productIndex = state.favorateItems.findIndex(
        (item) => item.id === action.payload
      );
      state.favorateItems.splice(productIndex, 1);
    },
  },
});




export default FavorateSlice;
