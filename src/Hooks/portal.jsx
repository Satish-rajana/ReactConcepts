import { createPortal } from "react-dom";
import ReactDOM from 'react-dom'; 

const Portal = () => {
    return createPortal( 
    <>
        <h2>Portal</h2>
        <p>Portal component is placed after forwardRef component in app component. 
            But in UI, it is placed at the end of the page because in create portal function, 
            we created a DOM node to div element with id portal which is in index.html. 
            This div is placed placed after the div with id root.
        </p>
    </>,
        document.getElementById('portal'))}

export default Portal;