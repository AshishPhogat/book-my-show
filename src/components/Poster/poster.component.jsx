import React from "react";
import {Link } from "react-router-dom";

const Poster=(props)=>{
    return <Link to={`/movie/${props.id}`}> 
        <div className="flex flex-col gap-1 w-56 items-start">
            <div className="h-68 w-40 lg:w-48">
                <img  className ="rounded-md w-full h-full" src={`https://image.tmdb.org/t/p/original${props.poster_path}`} alt = "poster_image"/>
            </div>
            <h3 className={`text-lg w-52 font-bold ${props.isDark ?"text-white" :"text-gray-800"}`}>{props.original_title}</h3>
            {/* <p className={`text-sm ${props.isDark ?"text-white" :"text-gray-800"}`}>{props.subtitle}</p> */}
            <h5 className="text-sm text-gray-400">{props.writer}</h5>
            <h5 className="text-sm text-gray-400">{props.cost}</h5>
        </div>
    </Link >
};


export default Poster;