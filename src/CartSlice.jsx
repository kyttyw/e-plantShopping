import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
  const { name, image, cost } = action.payload; // Destructure product details from the action payload
  // Check if the item already exists in the cart by comparing names
  const existingItem = state.items.find(item => item.name === name);
  if (existingItem) {
    // If item already exists in the cart, increase its quantity
    existingItem.quantity++;
  } else {
    // If item does not exist, add it to the cart with quantity 1
    state.items.push({ name, image, cost, quantity: 1 });
  }
},

    removeItem: (state, action) => {
        const {name} = action.payload;

        existingItem = state.items.find(item=> item.name === name)
        if(existingItem){
            state.items.filter(item=> item.name !== name)
        }

    },
    updateQuantity: (state, action) => {
         const {name} = action.payload;

        existingItem = state.items.find(item=> item.name === name)
        if(existingItem){
            existingItem.quantity++;
        }


    
    },

    disQuantity: (state, action) => {
        const {name} = action.payload;

       existingItem = state.items.find(item=> item.name === name)
       if(existingItem.quantity > 1){
           existingItem.quantity--;
       } else if(existingItem.quantity==1){
        state.image = state.items.filter(item => item.name !== name);
       }
    
   
   },
  },
});

export const { addItem, removeItem, updateQuantity, disQuantity } = CartSlice.actions;

export default CartSlice.reducer;
