import { createSlice } from "@reduxjs/toolkit";


const CartSlice = createSlice({
    name:"cart",
    initialState:{
        cart:[],
    },
    reducers:{
        addToCart:(state,action) => {
            // we finding if there is some existing item already in cart included or not
            const existingItem = state.cart.find((item)=>  item.id === action.payload.id )
            // if existingItem is already there in cart then map all {img,name,price} but qty should be incrase by 1
            if(existingItem){
              state.cart =  state.cart.map((item)=> item.id === action.payload.id ? {...item, qty: item.qty + 1} : item )
            }  
             else{

                 state.cart.push(action.payload)
             }
        },
        removeFromCart: (state,action) => {
          state.cart =  state.cart.filter((item)=> item.id !== action.payload.id)
        },
        
        increamentQty : (state,action) => {
            state.cart = state.cart.map((item) => item.id === action.payload.id ? {...item, qty: item.qty + 1} : item )
        } ,
        decrementQty : (state,action) => {
            state.cart = state.cart.map((item)=> item.id === action.payload.id ? {...item,qty: item.qty - 1} : item )
        }
    }
});

export const {addToCart,removeFromCart,increamentQty,decrementQty} = CartSlice.actions;
export default CartSlice.reducer;