import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    cartvalues:[],
    totalprice:0
}

const CartReducer = createSlice({
    name:"CartReducer",
    initialState,
    reducers:{
        incrementcart: (state,action) =>{
            state.cartvalues.push(action.payload)
            const pricearray = state.cartvalues.map(obj => obj.productPrice)
            state.totalprice = pricearray.reduce((a,b) => a+b)
        },
        decrementcart: (state,action) =>{
            const index = state.cartvalues.findIndex(obj => obj.productName === action.payload.productName)
            if(index >-1){
                state.cartvalues.splice(index,1) 
            }
            const pricearray = state.cartvalues.map(obj => obj.productPrice)
            state.totalprice = pricearray.reduce((a,b) =>a+b,0)
        }
    }
})

export const {incrementcart,decrementcart} = CartReducer.actions

export default CartReducer.reducer