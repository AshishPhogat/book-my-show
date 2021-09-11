import React from "react";

const Poster=(props)=>{
    return <> 
        <div className="flex flex-col gap-1 px-3 items-start">
            <div className="h-28 md:h-80">
                <img  className ="rounded-md w-full h-full" src={props.src} alt = {props.title}/>
            </div>
            <h3 className={`text-lg font-bold ${props.isDark ?"text-white" :"text-gray-800"}`}>{props.title}</h3>
            <p className={`text-sm ${props.isDark ?"text-white" :"text-gray-800"}`}>{props.subtitle}</p>
        </div>
    </>
};


export default Poster;