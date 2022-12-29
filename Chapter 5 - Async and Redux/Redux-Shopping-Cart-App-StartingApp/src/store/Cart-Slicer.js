import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : "cart",
    initialState : {
        itemslist : [],
        Totalquantity : 0,
        showCart : false,
    }
    , reducers : {
        replaceData(state,actions){
            console.log(actions.payload);
            if(actions.payload.itemslist){
                state.itemslist = actions.payload.itemslist;
                state.Totalquantity = actions.payload.Totalquantity;
                state.showCart = false;
            }
        }
        ,
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
        },
        ShowTheCart(state,actions){
            state.showCart = !state.showCart;
        },
        quantityAdd(state,actions){
            const id = actions.payload;
            const item = state.itemslist.find((i) => i.id === id);
            item.quantity++;
            item.totalprice += item.price;
        },
        quantityRemove(state,actions){
            const id = actions.payload;
            const item = state.itemslist.find((i) => i.id === id);
            if(item.quantity === 1){
                state.itemslist = state.itemslist.filter((item) => item.id !== id);
                item.totalprice -= item.price;
                state.Totalquantity--;
            }
            else{
                item.quantity--;
                item.totalprice -= item.price;
            }
        }
    }
})

export const cartActions = cartSlice.actions;

export default cartSlice;