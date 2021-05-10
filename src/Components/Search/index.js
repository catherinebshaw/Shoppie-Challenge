import React from 'react';
import "./style.css"

function Search(props){
    return(
        <div classname='col col-sm-4'>
            <input
            className='form-control'
            id="search"
            value={props.value}
            onChange={(event) => props.setSearchValue(event.target.value)}
            placeholder= 'Search for movies...'
            ></input>
        </div>
    )
}
export default Search;
