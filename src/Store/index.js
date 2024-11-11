import { configureStore } from "@reduxjs/toolkit";
import itemsSlice from "./itemSlice";

const FoodStore=configureStore({
    reducer:{
        items:itemsSlice.reducer,
    }
})

export default FoodStore;