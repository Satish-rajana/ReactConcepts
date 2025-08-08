import { useSelector, useDispatch } from "react-redux"
import { reducerActions } from "./counterSlice";

export default function ChildCom() {
    const count = useSelector(state => state.CounterSlice.counter)  
    // Here we need to use the name - CounterSlice because it is the name given to this slice when we passed it 
    // to the store as a reducer - configureStore({reducer : {CounterSlice : counterSlice.reducer} 
    // and the counter is the name given as initial state name.
    const dispath = useDispatch();

    return (
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <button onClick={() => dispath(reducerActions.decrement())}>decrement</button>
        <p>{count}</p>
        <button onClick={() => dispath(reducerActions.increment())}>increment</button>
        </div>
    )
}