import React from "react";


//component 
import PlaysNavbar from "../components/Navbar/plays.navbar";
import HelpBar from "../components/HelpBar/helpbar.component";


const PlaysLayout =(props)=>{
    return <> 
        <div>
           <PlaysNavbar />
           <div className="w-full lg:hidden p-4">
               <img className="w-full h-full" src="https://in.bmscdn.com/promotions/default/le-carousel_v2.png" alt="poster_image" />
           </div>
           <div className="lg:hidden">
               <HelpBar />
           </div>
           {props.children}
        </div>
    </>
};

export default PlaysLayout ;