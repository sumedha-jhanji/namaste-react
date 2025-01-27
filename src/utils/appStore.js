import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"

const appStore = configureStore({
    //add slices
    reducer: {
        cart:cartReducer
        //we can add further sliced reducers here like user: userReducer etc
    }

});

export default appStore;