import { configureStore } from '@reduxjs/toolkit';
import shoppingCartReducer from './shopping-cart-slice';
import uiReducer from './ui-slice';

const store = configureStore({
  reducer: {
    shoppingCart: shoppingCartReducer,
    ui: uiReducer,
  },
});

export default store;
