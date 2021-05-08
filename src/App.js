import React, { useState, useEffect} from 'react';
import './App.css';
import SearchResults from "./Components/SearchResults"

function App() {
  const [movies, setMovies] = useState([]);

  async function getMovies(){
    const url = `http://www.omdbapi.com/?s=Emma&apikey=df7ad2d3`;

    const response = await fetch(url);
    const responseJson = await response.json();
    console.log(responseJson);
    if(responseJson.Search){
      setMovies(responseJson.Search);
    }
  }
  useEffect(() => {
    getMovies();
  }, [])

  return (
    <div className="App">
      <div className="row">
        <SearchResults movies={movies}/>

      </div>
    </div>
  );
}

export default App;
