import React, { useState, useEffect} from 'react';
import './App.css';
import SearchResults from "./Components/SearchResults"
import Search from "./Components/Search"

function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  async function getMovies(){
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=df7ad2d3`;
    console.log(`searching for ${searchValue}`, searchValue)

    const response = await fetch(url);
    const responseJson = await response.json();
    console.log(responseJson);
    if(responseJson.Search){
      setMovies(responseJson.Search);
    }
  }
  useEffect(() => {
    getMovies(searchValue);
  }, [searchValue])

  return (
    <div className="App">
      <div className="row">
        <Search searchValue={searchValue} setSearchValue={setSearchValue}/>
      </div>
      <div className="row">
        <SearchResults movies={movies}/>
      </div>
    </div>
  );
}

export default App;
