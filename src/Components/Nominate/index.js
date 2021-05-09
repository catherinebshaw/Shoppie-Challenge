import React from 'react';
import './style.css'
import { FaHeart } from 'react-icons/fa';

function Nominate(){
    return(
        <>
        <FaHeart id="heartIcon" style={{ color: "red"}} />
        <span className='mr-2'>   Nominate This Film</span>

        </>
    );
};
export default Nominate;