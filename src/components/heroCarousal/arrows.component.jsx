import React from "react";

export const PrevArrow=(props)=>{
    return <> 
        <div className={props.className}
        style={{...props.style,background : "black"}}
        onClick={props.onClick}></div>
    </>
};

export const NextArrow=(props)=>{
    return <> 
        <div className={props.className}
        style={{...props.style,background : "black"}}
        onClick={props.onClick}></div>
    </>
};
