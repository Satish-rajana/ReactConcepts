import { forwardRef, useRef, useImperativeHandle } from "react";


const UseImperativeHandle = forwardRef((props, ref) => {
     const internalRef = useRef(null);

     // Logic to customize instance value (e.g., expose specific methods or properties)
     useImperativeHandle(ref, () => ({
       select: () => {
         internalRef.current.select();
       },
       // Add more custom methods or properties as needed
     }));

     return (<>
     <p>forwardRef is used in this component to forward the reference of input element to app component</p>
     <p>useImperative hook allows app component to only use select method on input, since it is the only method defined in this hook. <br></br>
        We cannot use focus method here because it is not defined in useImperativeHandle hook.
     </p>
     <p>Enter any characters in input and click on the button. It selects the text entered.</p>
     <input ref={internalRef} />
     </>);
   });

export default UseImperativeHandle;