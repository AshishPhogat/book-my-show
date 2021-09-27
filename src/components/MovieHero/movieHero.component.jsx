import React,{useContext} from "react";

//component
import MovieInfo from "./movieInfo.component";

//Context
import { MovieContext } from "../../context/movie.context";

const MovieHero = ()=>{
    const {movie}  = useContext(MovieContext);
    return <>
        <div>
                {/* mobile */}
                <div className="md:hidden relative w-full "  style ={{height : "calc(180vw)"}}>
                    <div className="w-full h-56 absolute bottom-0 bg-black bg-opacity-50"></div>
                    <div className="absolute bottom-0 z-10">
                        <MovieInfo />
                    </div>

                    <img className="w-full h-full" src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="bg_img" />
                </div>
                {/* Medium */}
                <div className="hidden md:block h-96 w-full relative lg:hidden"  style ={{height : "calc(100vw)"}}>
                
                <div className="absolute bottom-0 z-10">
                        <MovieInfo />
                </div>

                <div className="w-full h-56 absolute bottom-0 bg-black bg-opacity-50"></div>
                    <img className="w-full h-full" src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="bg_img" />
                </div>
                {/* Large */}
                <div className="hidden w-full relative lg:block " style={{height : "35rem"}}>

                    

                    <div className="absolute z-10 w-full h-full " style = {{backgroundImage :
                        "linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)"}}></div>
                    
                    <div className="absolute z-30  left-28 top-32 flex items-center gap-8">
                    <div className="w-64  h-96">
                        <img className="rounded-2xl" src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}  alt="posterImage"/>
                    </div>

                    <div >
                        <MovieInfo />
                    </div>
                    </div>
                    <img className="w-full h-full" src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt="bg_img" />
                </div>

        </div>
    </>
};

export default MovieHero;