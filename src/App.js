import React, { useState, useEffect} from 'react';
import './App.css';
import Header from "./Components/Header"
import SearchResults from "./Components/SearchResults";
import Search from "./Components/Search";
import SectionHeader from "./Components/SectionHeader";
import Nominate from "./Components/Nominate";
import RemoveNomination from "./Components/RemoveNomination";
import Footer from "./Components/Footer"

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
    // if( nominatedList.length === 5){ return <Banner>Congratulations, you have nominated FIVE movies</Banner>} 
    // else {return '' }
  
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
    <>
  
        <Header header="The Shoppies"/>
      <div className="row" id="searchBar">
        <Search searchValue={searchValue} setSearchValue={setSearchValue}/>
      </div>
    <div className="row">
      <div className="col-sm">
        <div className="container-sm">
            <div className="row" id="nominatedBar">
              <SectionHeader heading="Search Results"/>
            </div>
        </div>
        <div className="container-sm" id="scroll">
          <div className="row row-cols-1 row-cols-md-2 g-2" id="results">
              <SearchResults 
                movies={movies} 
                addToNominatedList={Nominate}
                handleNominationClick={nominateMovie}
                />
          </div>
        </div>
      </div>
      <div className="col-sm">
        <div className="container-sm">
            <div className="row " id="nominatedBar">
              <SectionHeader heading="Nominated Movies"/>
            </div>
        </div>
        <div className="container-sm" id="scroll">
          <div className='row row-cols-1 row-cols-md-2 g-2' id="results">
            <SearchResults 
              movies={nominatedMovies} 
              addToNominatedList={RemoveNomination}
              handleNominationClick={removeNomination}
              />
          </div>
        </div>
      </div>
      </div>
      <Footer/>
    </>
  );
}

export default App;

