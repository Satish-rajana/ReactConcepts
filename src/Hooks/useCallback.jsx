import { memo } from "react";

const UseCallback = memo(({ onClick }) => {
  console.log('UseCallback component is rendered');
  return (
  <>
  <h4>Without useCallback</h4>
  <p>handleCBClick is recreated on every render. <br />
Even if text changes, UseCallback component re-renders because onClick is a new function reference.</p>
  <h4>With useCallback</h4>
  <p>handleCBClick is memoized and only recreated if dependencies change. <br />
Changing text does not re-render the Button component.</p>
  <button onClick={onClick}>Click Me</button>
  </>
  );
});

export default UseCallback;


