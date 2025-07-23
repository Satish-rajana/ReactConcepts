import { useState } from "react"
import ChildrenMemo from "./ChildrenMemo";

const ParentMemo = function ParentMemo() {
    console.log('Parent component is executed')

    const [value, setValue] = useState('');
    const [memoValue, setMemoValue] = useState('');

    return (
        <>
        <p>When we click on 1st button only the parent component is re-compiled 
            even though child component is used in parent because child is wrapped 
            with memo which re-compiles only if the props shared to children component 
            are changed. <br />
            When we click on 2nd button both parent and children component is executed because
            the value shared as prop to children component is changed. <br />
            We can observe this changes by checking the message printed on console 
            when we click on the buttons.
        </p>
        <button onClick={() => setValue('Parent component is executed')}>1</button>
        <p>{value}</p>
        <button onClick={() => setMemoValue('Children component is executed')}>2</button>
        <ChildrenMemo value={memoValue} />
        </>
    )
}

export default ParentMemo;