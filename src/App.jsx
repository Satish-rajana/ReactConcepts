import { useRef, useState, useCallback } from 'react'
import './App.css'
import UseState from './Hooks/useState'
import UseRef from './Hooks/useRef'
import UseImperativeHandle from './Hooks/useImperativeHandle'
import Portal from './Hooks/portal'
import MyContext from './Context/context'
import ComUsingState from './Context/ComUsingState'
import UseReducer from './Hooks/useReducer'
import UseEffect from './Hooks/useEffect'
import ParentMemo from './optimizationMethods/ParentMemo'
import UseMemo from './Hooks/useMemo'
import UseCallback from './Hooks/useCallback'
import ParentContextCompoent from './Redux/parentComponent'
import ParentComp from './ReduxToolkit/parentComp'
import Root from './Router/root'

function App() {

  //useRef
  const inputRef = useRef(null);

  const handleClick = () => {
      inputRef.current.select();
    };

  //context
  const msg = 'This msg is defined in app component but it is being displayed in this component without being passed as a prop because we are using createContext which is wrapped around the app. In similar way state updating function is also passed as a key-value pair in an object which is triggered in this component'
  const [contextState, setContextState] = useState(true);
  const obj = {
    contextMsg : msg,
    contextState, 
    contextFun : () => {
    setContextState((prevState) => !prevState);
  }}

  //useMemo
  const [number, setNumber] = useState(1);
  const [text, setText] = useState('');

  //useCallback
    const [count, setCount] = useState(0);
    const [CBtext, setCBText] = useState('');

    const handleCBClick = useCallback(() => {
      setCount((prev) => prev + 1);
    }, []); // Memoized function
    //comment the above line and un comment below line to see the difference what happens if we don't use useCallback hook
    //const handleCBClick = () => { setCount((prev) => prev + 1); }


  return (
    <MyContext value={obj}>
      {/* useState hook */}
    <h2>useState hook</h2>
      <UseState />
      <hr></hr>

      {/* useRef hook */}
      <h2>useRef hook</h2>
      <UseRef />
      <hr></hr>

      {/* forwardRef & UseImperativeHandle hook */}
      <h2>forwardRef & UseImperativeHandle hook</h2>
      <UseImperativeHandle ref={inputRef}/>
      <button onClick={handleClick}>select input text</button>
      <hr></hr>

      {/* Portal */}
      <Portal />
      <h2>Context API</h2>
      <ComUsingState />
      <hr></hr>

      {/* UseReducer hook */}
      <h2>UseReducer hook</h2>
      <UseReducer />
      <hr></hr>

      {/* UseEffect hook */}
      <h2>UseEffect hook</h2>
      <UseEffect />
      <hr></hr>

      {/* Memo */}
      <h2>Memo</h2>
      <ParentMemo />
      <hr></hr>

      {/* useMemo hook */}
      <h2>useMemo hook</h2>
      <UseMemo number={number} />
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something"
      />
      <hr></hr>

      {/* useCallback hook */}
      <h2>useCallback hook</h2>
      <UseCallback onClick={handleCBClick} />
      <input
        value={CBtext}
        onChange={(e) => setCBText(e.target.value)}
        placeholder="Type something"
      />
      <p>Count: {count}</p>
      <hr></hr>

      {/* Redux */}
      <h2>Redux</h2>
      <ParentContextCompoent />
      <hr></hr>

      {/* Redux toolkit */}
      <h2>Redux toolkit</h2>
      <ParentComp />
      <hr></hr>

      
    </MyContext>
  )
}

export default App
