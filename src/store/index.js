import { configureStore } from "@reduxjs/toolkit";
import BasketSlice from "./basket-slice";
import AuthSlice from "./auth-slice";
import FavorateSlice from "./favorate-slice";
import ThemeSlice from "./theme-slice";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";
import {
  
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'


const reducers = combineReducers({
  basket: BasketSlice.reducer,
  auth: AuthSlice.reducer,
  theme: ThemeSlice.reducer,
  favorate: FavorateSlice.reducer,
});

const persistConfig = {
    key: 'root',
    storage
}

const persistReducers = persistReducer(persistConfig, reducers)


const store = configureStore({
    reducer: persistReducers,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});


export const basketActions = BasketSlice.actions;
export const authActions = AuthSlice.actions;
export const themeActions = ThemeSlice.actions;
export const favorateActions = FavorateSlice.actions;

export default store;
