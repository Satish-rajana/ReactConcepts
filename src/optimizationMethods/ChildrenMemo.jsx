import { memo } from "react"

const ChildrenMemo = memo(function ChildrenMemo({value}) {
    console.log('Children component is executed')
    return (
        <>
        <p>{value}</p>
        </>
    )
})

export default ChildrenMemo;