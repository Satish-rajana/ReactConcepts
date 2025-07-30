import { useContext } from "react";
import MyContext from "./context";

export default function ComUsingState() {
    const {contextState, contextMsg, contextFun} = useContext(MyContext);

    return(
        <>
        <p>{contextState ? contextMsg : 'state is changed'}</p>
        <button onClick={contextFun}>click to trigger state updating function</button>
        </>
    )
}