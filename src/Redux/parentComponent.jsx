import { Provider } from "react-redux"
import SubscribedComponent from "./subscribedComponent"
import store from "./store"

export default function ParentContextCompoent() {
    return (
        <Provider store={store}>
        <ol>
            <li>Install Redux and React-Redux : <b>npm install redux react-redux</b></li>
            <li>Create a Redux Store and pass the Reducer function : <b>createStore(Reducer)</b></li>
            <li>Provide the Store to React by passing it as a argument to store in Provider element</li>
            <li>Use useSelector to subscribe to store and get hold of a state value</li>
            <li>Use useDispatch to pass actions to the change the state in store</li>
        </ol>
        <SubscribedComponent />
        </Provider>
    )
}