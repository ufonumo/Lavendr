import './App.css';
import Movie from './component/Movie';
import React , {useEffect, useState} from 'react'



function App() {
  const FeatureaAPI = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc`;
  const ImageAPI = `https://image.tmdb.org/t/p/w500`;
  const SearchAPI = `https://api.themoviedb.org/3/search/movie?api_key=`
  const [movies, setMovies] = useState([]);

  useEffect(async () => {
    
    const response = await fetch(FeatureaAPI)
    const moviesres = await response.json();
    setMovies(moviesres)

  }, [])

  console.log(movies);

  return (
    <>
      {movies.map((list) =>(
        <Movie/>
      ) )}
    </>
  );
}

export default App;
