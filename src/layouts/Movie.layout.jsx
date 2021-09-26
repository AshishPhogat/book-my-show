import Reactj,{useEffect,useContext} from "react";
import {useParams} from "react-router-dom";


//Components
import MovieNavbar from "../components/Navbar/movienavbar.component";

//context
import { MovieContext } from "../context/movie.context";


const MovieLayout=(props)=>{

    const {id} = useParams();

    return <> 
        <MovieNavbar /> 
        {props.children}
    </>
};

export default MovieLayout;