import { Provider } from "react-redux";
import ChildCom from "./childCom";
import toolKitStore from "./toolKitStore";


const ParentComp = () => {
    return (
        <>
        <ol>
            <li>Install Redux Toolkit and React-Redux : <b>npm install @reduxjs/toolkit react-redux</b></li>
            <li>Create a slice using createSlice function and export the counterSlice and the counterSlice.actions</li>
            <li>Create a central store and import the counterSlice and pass it to the configureStore as a reducer.</li>
            <li>If multiple slices need to be passed, pass the slices to an object by naming them with a unique name : 
                <b>configureStore(&#123; reducer: &#123; CounterSlice: counterSlice.reducer &#125; &#125;)</b></li>
            <li>To use the state value, import useSelector which automatically gets the current state and use the 
                unique name CounterSlice to get hold of the current state : <b>useSelector(state ={">"} state.CounterSlice.counter)</b></li>
            <li>To dispatch an action from child component, we need to import useDispath function to sbscribe to the store</li>
            <li>Import the counterSlice.actions from the counterSlice and pass the action which need to be performed by the button</li>
        </ol>
        <Provider store={toolKitStore}>
            <ChildCom />
        </Provider>
        </>
        
    )
}

export default ParentComp;