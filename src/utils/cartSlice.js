import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems:[] 
    },
    reducers:{
        addItem:(state, action)=>{
            state.cartItems.push(action.payload)
        },
        removeItem:(state, action)=>{
            state.cartItems.pop()
        },
        clearItems:(state)=>{
            state.cartItems.length=0
        }
    }
})

export const {addItem, removeItem, clearItems} = cartSlice.actions
export default cartSlice.reducer;
