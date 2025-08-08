import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./Home"
import App from "../App"

export default function Root() {
    const Router = createBrowserRouter([
        {path : '/', element : <App />},
        {path : '/home', element : <Home />}
    ])
    return (
        <RouterProvider router={Router}></RouterProvider>
    )
}