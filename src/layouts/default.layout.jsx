import React from "react";


//Components
import Navbar from "../components/Navbar/navbar.component";
import HeroCarousal from "../components/heroCarousal/herocarousal.component";


const DefaultLayout = (props)=>{
    return <>
    <div>
        <Navbar />
       <HeroCarousal />
       {console.log(`the props.children is: ${props.children}`)}
        {props.children}
    </div>
    </>
};

export default DefaultLayout ;