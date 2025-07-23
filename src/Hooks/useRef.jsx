import { useRef, useState } from "react"

export default function UseRef() {
    const [value, setValue] = useState();
    const myRef = useRef();

    return (
        <>
        <p>useRef hook is used to focus on the input without clicking in the text area. <br></br>
        When we click on the button, the cursor automatically goes into the text area.</p>
        <input ref={myRef} />
        <button onClick={() => setValue(myRef.current.focus())}>click</button>
        </>
    )
}