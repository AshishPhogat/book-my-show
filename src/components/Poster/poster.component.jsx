import React from "react";

const Poster=(props)=>{
    return <> 
        <div className="flex flex-col gap-1 items-start">
            <div className="h-68 w-40 lg:w-48  ">
                <img  className ="rounded-md w-full h-full" src={props.src} alt = "poster_image"/>
            </div>
            <h3 className={`text-lg font-bold ${props.isDark ?"text-white" :"text-gray-800"}`}>{props.title}</h3>
            <p className={`text-sm ${props.isDark ?"text-white" :"text-gray-800"}`}>{props.subtitle}</p>
            <h5 className="text-sm text-gray-400">{props.writer}</h5>
            <h5 className="text-sm text-gray-400">{props.cost}</h5>
        </div>
    </>
};


export default Poster;