import { useState } from "react";

function UseState() {
    const [state, setState] = useState(0);

    function handleAdd() {
        setState(state + 1);
    }
    function handleSub() {
        setState(state - 1);
    }

    return (
        <>
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
        <button onClick={handleSub}>-</button>
        <p>{state}</p>
        <button onClick={handleAdd}>+</button>
        <p>{
            (state%2 == 0) ? 'even' : 'odd'
            }</p>
        </div>
        </>
    )
}

export default UseState;