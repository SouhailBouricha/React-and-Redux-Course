import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : "cart",
    initialState : {
        itemslist : [],
        Totalquantity : 0,
        showCart : false,
    }
    , reducers : {
        addCart(state,actions){
            const newItem = actions.payload;
            const existItem = state.itemslist.find((item) => item.id === newItem.id);
            if(existItem){
                existItem.quantity++;
                existItem.totalprice += newItem.price;
            }
            else{
                state.itemslist.push({
                    id : newItem.id,
                    price : newItem.price,
                    quantity : 1,
                    totalprice : newItem.price,
                    name : newItem.name,
                })
                state.Totalquantity++;
            }
        }
    }
})

export const cartActions = cartSlice.actions;

export default cartSlice;