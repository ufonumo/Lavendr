import './App.css';
import Movie from './component/Movie';
import React , {useEffect, useState} from 'react'



function App() {
  const APIKEY = `713b06f463955d2d504de27d17e4f655`;
  const FeatureaAPI = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${APIKEY}`;
  const SearchAPI = `https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&query=`;
  // const TOKEN = `eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MTNiMDZmNDYzOTU1ZDJkNTA0ZGUyN2QxN2U0ZjY1NSIsInN1YiI6IjYwOTAwZWNlYTE5OWE2MDAyOTg2ZTJiYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yn524nOINkj43kOfNYsVBNDz-9Q4Ffx1-RCB3Ufkddg`;
  
  const [movies, setMovies] = useState([]);
  const [searchMovie, setSearchMovie] = useState('');

  useEffect( () => {
    FetchMovies(FeatureaAPI);
  }, [])

  const FetchMovies = async (APIKEY) =>{
    const response = await fetch(APIKEY)
    const moviesres = await response.json();
    setMovies(moviesres.results)
    console.log(moviesres);
  }

  const handleSubmit = (e) =>{
    e.preventDefault();

    FetchMovies(SearchAPI + searchMovie)
  }  

  const handleChange = (e) =>{
    setSearchMovie(e.target.value)
  }

  return (
    <>
      <header className="header">
        <form onSubmit={handleSubmit}>
          <input onChange={handleChange}  type="text" value={searchMovie} 
          placeholder='Search...' className="search_bar" />
        </form>
      </header>
      <div className='movie_container'>
        {movies.length > 0 && movies.map((list) =>(
          <Movie data={list} key={list.id}/>
        ) )}
      </div>
    </>
  );
}

export default App;
