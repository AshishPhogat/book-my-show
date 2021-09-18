import React from "react";

const Cast= (props)=>{
    return <>
        <div className="flex flex-col items-center px-4">
            <div className="w-24 md:w-28 h-24 md:h-28">
                <img className="w-full h-full rounded-full" src={props.image} alt="cast"/>
            </div>
            <h1 className="text-md font-base text-gray-800">{props.castName}</h1>
            <h5 className="text-sm font-medium text-gray-600">{props.role}</h5>
        </div>
    </>
};

export default Cast;