import React from 'react';
import "./style.css"

function Heading(props){
    return(
        <div classname='col' id="heading">
            <h2>{props.heading}</h2>
        </div>
    )
}
export default Heading;