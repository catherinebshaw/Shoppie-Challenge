import React, { useState, useEffect} from 'react';
import './App.css';
import SearchResults from "./Components/SearchResults";
import Search from "./Components/Search";
import Heading from "./Components/Heading";
import Nominate from "./Components/Nominate";
import RemoveNomination from "./Components/RemoveNomination";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('The Matrix');
  const [nominatedMovies, setNominatedMovies] = useState([]);

  useEffect(() => {
    const json = localStorage.getItem("nominatedMovies");
    const savedMovies = JSON.parse(json);
  if (savedMovies){
    setNominatedMovies(savedMovies);
  }
  }, [])

  async function getMovies(searchValue){
    const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=df7ad2d3`;
    console.log(`searching for ${searchValue}`, searchValue)

    const response = await fetch(url);
    const responseJson = await response.json();
    console.log(responseJson);
    
    if(responseJson.Search){
      setMovies(responseJson.Search);
    };

  };
  
  useEffect(() => {
    getMovies(searchValue); 
  }, [searchValue])

  function nominateMovie(movie){
    const nominatedList = [...nominatedMovies, movie];
    setNominatedMovies(nominatedList);
    console.log(nominatedList)
  }

  function removeNomination(movie){
    const nominatedList = nominatedMovies.filter(
      (nominatedMovie) => nominatedMovie.imdbID !== movie.imdbID);
      setNominatedMovies(nominatedList)
      console.log(nominatedList)
  }
 
  useEffect(() => {
    const json = JSON.stringify(nominatedMovies);
    localStorage.setItem("nominatedMovies", json)
  },[nominatedMovies]);


  
  return (
    <div className="container-fluid App">
        <Heading heading="The Shoppies"/>
      <div className="row d-flex align-items-center mt-4 mb-4">
        <Search searchValue={searchValue} setSearchValue={setSearchValue}/>
      </div>
      <div className="row">
        <SearchResults 
        movies={movies} 
        addToNominatedList={Nominate}
        handleNominationClick={nominateMovie}/>
      </div>
      <div className="row d-flex align-items-center mt-4 mb-4">
        <Heading heading="Nominated Movies"/>
      </div>
      <div className='row'>
        <SearchResults 
        movies={nominatedMovies} 
        addToNominatedList={RemoveNomination}
        handleNominationClick={removeNomination}
        />
      </div>
    </div>
  );
}

export default App;
