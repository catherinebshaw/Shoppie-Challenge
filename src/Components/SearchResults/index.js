import React from "react";

function searchResults(props){
    const AddToNominatedList = props.addToNominatedList;
    return(
        <>
        {props.movies.map((movie,index) => (
            <div className="image-container d-flex justify-content-start m-3">
                <img src={movie.Poster} alt={movie.Title}/>
                <div 
                onClick={() =>props.handleNominationClick(movie)}
                className='overlay d-flex align-items-center justify-content-center'>
                <AddToNominatedList/>
                </div>
            </div>
        ))}
        </>
    );
};
export default searchResults;