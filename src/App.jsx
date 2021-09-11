import { Route } from "react-router";

//HOC
import DefaultHOC from "./HOC/default.HOC";
import MovieHOC from "./HOC/movie.HOC";

//component
import HomePage from "./Pages/home.page";
import Movie from "./Pages/Movie.page";


// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App(){
  return <>
    <DefaultHOC path="/" exact component={HomePage} />
    <MovieHOC path="/movie:id" exact component={Movie} />

  </>
}

export default App;
