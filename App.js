import React from 'react'
import {useEffect} from 'react';
import './App.css';
import SearchIcon from './search.svg'

// below  is an static variable

const API_URL = "http://www.omdbapi.com?apikey=41f4b290";
// we will impport our data as soon as we reloads which hook is responsible for this that is useeffect hook from react

// below is a static function
// async means asynchronous data which means it takes some time to fetch the movies

// below is the static data
const movie1={
    "Title": "Batman Begins",
    "Year": "2005",
    "imdbID": "tt0372784",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
}

const App=()=>{

const searchMovies=async(title)=>{
    // the below is the statemenet that calls our api 
    const response = await fetch(`${API_URL}&s=${title}`);  // ny the below statemenet we get the data from the fetch statemenet from the above
    const data=await response.json();

    // console.log(data);
    // as soon as we get the console of the above statement we get an object in console with response,searcg,and totalresults with prototype as well
    console.log(data.Search);
}

    useEffect(()=>{
      searchMovies('batman');
    },[]);
    return ( 
        <div className="app">
     <h1>MovieLand</h1>
     {/* below div includes the searchicon as well as the placeholder that's why all thses come in a single line */}
     <div className="search">
        <input
        placeholder="Search for Movies"
        value="Superman"
        onChange={()=>{}}
        />
       <img src={SearchIcon} alt="search"
       onClick={()=>{}}
       />
     </div>

     <div className="container">
       <div className="movie">
        <div>
            <p>{movie1.Year}</p>
        </div>
        <div>
            <img src={movie1.Poster!=='N/A'?movie1.Poster:'https://via.placeholder.com/400'} alt={movie1.Title}/>
        </div>
        <div>
            <span>
                {movie1.Type}
            </span>
            <h3>
                {movie1.Title}
            </h3>
        </div>    
     </div>
    </div>
    </div>
);
}

export default App;

// Time Span: 1:00