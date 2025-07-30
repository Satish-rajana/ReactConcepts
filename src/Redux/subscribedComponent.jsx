import { useDispatch, useSelector } from "react-redux"

export default function SubscribedComponent() {
    const count = useSelector(state => state.count);
    const dispatch = useDispatch();

    return (
        <>
        <button onClick={()=>dispatch({type:'decrement'})}>decrement</button>
        <p>{count}</p>
        <button onClick={()=>dispatch({type:'increment'})}>increment</button>
        </>
    )
}