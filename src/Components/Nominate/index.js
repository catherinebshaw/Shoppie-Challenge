import React from 'react';
import './style.css'
import { FaHeart } from 'react-icons/fa';

function Nominate(){
    return(
        <>
        <span className='mr-2'><FaHeart id="heartIcon"/>   Nominate This Film</span>
        </>
    );
};
export default Nominate;