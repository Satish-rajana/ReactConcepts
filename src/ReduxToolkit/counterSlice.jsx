import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name : 'counter',
    initialState : {counter : 0},
    reducers : {                         //Here we define the reducers with a 'S' but when we pass this
        increment(state) {               //reducer in toolKitStore, we pass it as counterSlice.reducer without 'S'
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        }
    }
});

export const reducerActions = counterSlice.actions;
export default counterSlice;
