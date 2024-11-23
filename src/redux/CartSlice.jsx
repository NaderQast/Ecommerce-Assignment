import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const ItemIndex = state.products.find((item) => item.id === newItem.id);
      if (ItemIndex) {
        ItemIndex.quantity++;
        ItemIndex.totalPrice += newItem.price;
      } else {
        state.products.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.Price,
          image: newItem.image,
        });
      }
      state.totalPrice += newItem.price;
      state.totalQuantity++;
    },
    removeFromCart(state, action) {
      const id = action.payload;
      const findItem = state.products.find((item) => item.id === id);
      if (findItem) {
        state.totalPrice -= findItem.totalPrice;
        state.totalQuantity -= findItem.quantity;
        state.products = state.products.filter((item) => item.id !== id);
      }
    },
    increaseQuantity(state , action){
        const id = action.payload; 
        const findItem = state.products.find((item) => item.id === id)
        if(findItem){
            findItem.quantity++;
            findItem.totalPrice += findItem.price ; 
            state.totalQuantity++;
            state.totalPrice += findItem.price
        }
    },
    
    decreaseQuantity(state, action){
        const id = action.payload; 
        const findItem = state.products.find((item) => item.id === id)
        if(findItem.quantity > 1){
            if(findItem){
                findItem.quantity--;
                findItem.totalPrice -= findItem.price ; 
                state.totalQuantity--;
                state.totalPrice -= findItem.price
            }
        }
     
    }
  },
});

export const { addToCart, removeFromCart ,increaseQuantity, decreaseQuantity } = CartSlice.actions;
export default CartSlice.reducer;
