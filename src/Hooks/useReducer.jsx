import { useReducer } from "react"

const initialState = {
    value : '',
    inputValue: ''
};
function reducer(state, action) {
    switch(action.type){
         case 'onChange':
            return {
                ...state,
                inputValue: action.value
            };
        case 'SUBMIT':
            return {
                ...state,
                value: state.inputValue
            };
        default :
            return state
    }
}

function UseReducer() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return(
        <>
        <input
                placeholder="name"
                type="text"
                value={state.inputValue}
                onChange={(e) => dispatch({type: 'onChange', value: e.target.value})}
            />
            <button onClick={() => dispatch({type: 'SUBMIT'})}>submit</button>
            <p>{state.value}</p>
        </>
    )
}

export default UseReducer;

// const initialState = { count: 0 };

// function reducer(state, action) {
//   switch (action.type) {
//     case 'increment':
//       return { count: state.count + 1 };
//     case 'decrement':
//       return { count: state.count - 1 };
//     default:
//       return state;
//   }
// };

// export default function UseReducer() {
//     const [state, dispatch] = useReducer(reducer, initialState);

//     return (
//         <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
//         <button onClick={() => dispatch({type : 'decrement'})}>decrement</button>
//         <p>{state.count}</p>
//         <button onClick={() => dispatch({type : 'increment'})}>increment</button>
//         </div>
//     )
// }