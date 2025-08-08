import { configureStore, createSlice } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";

const toolKitStore = configureStore({reducer : {CounterSlice : counterSlice.reducer}
}); // createStore can also be used to create a central store to share the state but if we have multiple slices
// to connect to the central store, we need to use configureStore so we can pass an reducer object where we can 
// define all the slices

export default toolKitStore;