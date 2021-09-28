import React from "react";
import {Link } from "react-router-dom";

const Poster=(props)=>{
    return <Link to={`/movie/${props.id}`}> 
        <div className="flex flex-col gap-1 w-40 lg:w-56 items-start">
            <div className="  md:h-64 w-24 md:w-48">
                <img  className ="rounded-md w-full h-full" src={`https://image.tmdb.org/t/p/original${props.poster_path}`} alt = "poster_image"/>
            </div>
            <h3 className={`text-lg w-24   overflow-auto lg:w-52 font-bold ${props.isDark ?"text-white" :"text-gray-800"}`}>{props.original_title}</h3>
            {/* <p className={`text-sm ${props.isDark ?"text-white" :"text-gray-800"}`}>{props.subtitle}</p> */}
        </div>
    </Link >
};


export default Poster;