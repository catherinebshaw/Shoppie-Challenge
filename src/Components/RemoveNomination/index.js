import React from 'react';
import { FaRegTrashAlt } from "react-icons/fa";
import "./style.css"

function RemoveNomination(){
    return(
        <>
        <span classname='mr-2'><FaRegTrashAlt id="trashIcon" />   Remove from List  </span>
        </>
    );
};
export default RemoveNomination;