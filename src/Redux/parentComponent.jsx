import { Provider } from "react-redux"
import SubscribedComponent from "./subscribedComponent"
import store from "./store"

export default function ParentContextCompoent() {
    return (
        <Provider store={store}>
        <SubscribedComponent />
        </Provider>
    )
}