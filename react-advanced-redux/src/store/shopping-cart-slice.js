import { createSlice } from '@reduxjs/toolkit';

const initialShoppingCartState = {
  shoppingCartItems: [],
  totalQuantity: 0,
  changed: false,
};

const updateTotal = (item) => item.price * (item.quantity || 1);

const updateTotalQuantity = (list) =>
  list.reduce((accumulator, item) => accumulator + item.quantity, 0);

const getExistingItem = (list, id) => list.find((item) => item.id === id);

const shoppingCartSlice = createSlice({
  name: 'shoppingcart',
  initialState: initialShoppingCartState,
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.shoppingCartItems = action.payload.shoppingCartItems;
    },
    addItem(state, action) {
      const id = action.payload.id;
      const existingItem = getExistingItem(state.shoppingCartItems, id);

      if (existingItem) {
        existingItem.quantity++;
        existingItem.total = updateTotal(existingItem);
      } else {
        state.shoppingCartItems.push({
          id: id,
          title: action.payload.title,
          quantity: 1,
          total: updateTotal(action.payload),
          price: action.payload.price,
        });
      }
      state.changed = true;
      state.totalQuantity = updateTotalQuantity(state.shoppingCartItems);
    },
    removeItem(state, action) {
      const id = action.payload;
      const existingItem = getExistingItem(state.shoppingCartItems, id);

      if (existingItem) {
        state.changed = true;
        
        if (existingItem.quantity > 1) {
          existingItem.quantity--;
        } else {
          state.shoppingCartItems = state.shoppingCartItems.filter(
            (item) => item.id !== id
          );
        }
        existingItem.total = updateTotal(existingItem);
      }
      state.totalQuantity = updateTotalQuantity(state.shoppingCartItems);
    },
  },
});

const shoppingCartReducer = shoppingCartSlice.reducer;

export const shoppingCartActions = shoppingCartSlice.actions;
export default shoppingCartReducer;
