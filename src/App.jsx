import { Route } from "react-router";

//HOC
import DefaultHOC from "./HOC/default.HOC";
import MovieHOC from "./HOC/movie.HOC";
import PlaysHOC from "./HOC/plays.HOC";

//component
import HomePage from "./Pages/home.page";
import Movie from "./Pages/Movie.page";
import Plays from "./Pages/plays.page";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App(){
  return <>
    <DefaultHOC path="/" exact component={HomePage} />
    <MovieHOC path="/movie:id" exact component={Movie} />
    <PlaysHOC path="/plays:id" exact component={Plays} />
  </>
}

export default App;
