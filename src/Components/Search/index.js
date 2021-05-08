import React from 'react';

function Search(props){
    return(
        <div classname='col col-sm-4'>
            <input
            className='form-control'
            value={props.value}
            onChange={(event) => props.setSearchValue(event.target.value)}
            placeholder= 'Search for movies...'
            ></input>
        </div>
    )
}
export default Search;
