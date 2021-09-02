import React from "react";

const DefaultLayout = (props)=>{
    return <>
    <div>
        <h1 className = "text-6xl p-6">Default layout</h1>
        {props.children}
    </div>
    </>
};

export default DefaultLayout ;