import React from "react";
import "./style.css"

function searchResults(props) {
    const AddToNominatedList = props.addToNominatedList;
    return (
        <>
            {props.movies.map((movie, index) => (
                <div classname="col">
                    <div key={movie.imdbID} className="image-container" id="moviePoster">
                        <img src={movie.Poster} alt={movie.Title} className="image" />
                        <p id="year">({movie.Year})</p>
                        <div
                            onClick={() => props.handleNominationClick(movie)}
                            className='overlay centered'>
                            <AddToNominatedList />
                        </div>
                    </div>
                </div>
            ))}

        </>
    );
};
export default searchResults;