export default function Home() {
    return (
        <>
        <p>Hi from Router</p>
        </>
    )
}

// 1) import createBrowserRouter from react-router-dom and 
// it takes an array of objects which contains the path and element
// 2) Path takes the value of the endpoint like '/' or '/products' 
// and element takes the value of component like <Products />
// 3) import RouterProvider and pass the createBrowserRouter stored in a const
// and pass it to the router attribute which setups the connection
// 4) Use Link component to navigate to other pages by creating a link 
// and pass the endpoint to 'to' attribute : <Link to='/endpoint'>click</Link>
// 5) 