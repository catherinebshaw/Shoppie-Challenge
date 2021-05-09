import React from 'react';
import { FaRegTrashAlt } from "react-icons/fa"

function RemoveNomination(){
    return(
        <>
        <FaRegTrashAlt id="trashIcon" />
        <span classname='mr-2'>   Remove from List  </span>

    </>
    );
};
export default RemoveNomination;