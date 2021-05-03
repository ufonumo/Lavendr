import './App.css';
import Movie from './component/Movie';

function App() {
  const FeatureaAPI = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc`;
  const ImageAPI = `https://image.tmdb.org/t/p/w500`;
  const SearchAPI = `https://api.themoviedb.org/3/search/movie?api_key=`

  return (
    <>
      <Movie/>
    </>
  );
}

export default App;
