import React from "react";


//Components
import Navbar from "../components/Navbar/navbar.component";
import HeroCarousal from "../components/heroCarousal/herocarousal.component";


const DefaultLayout = (props)=>{
    return <>
    <div>
        <Navbar />
       <HeroCarousal />
        {props.children}
    </div>
    </>
};

export default DefaultLayout ;