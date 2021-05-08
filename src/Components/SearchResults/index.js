import React from "react";

function searchResults(props){
    return(
        <>
        {props.movies.map((movie,index) => (
            <div className="image-container d-flex justify-content-start m-3">
                <img src={movie.Poster} alt={movie.Title}/>
            </div>
        ))}
        </>
    );
};
export default searchResults;