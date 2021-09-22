import React from "react";
import {VscLocation} from "react-icons/vsc";
import {BiFilterAlt} from "react-icons/bi"
//component 
import PlaysNavbar from "../components/Navbar/plays.navbar";
import HelpBar from "../components/HelpBar/helpbar.component";


const PlaysLayout =(props)=>{
    return <> 
        <div className="relative">
            <div className="lg:hidden">
                <div >
                    <button className="flex left-3 bottom-0 absolute items-center gap-2 font-light text-xs bg-Ashish-500 text-white  p-3 rounded-full"><span className="text-lg "><VscLocation /></span>Browse by Venues</button>
                </div>
                <div>
                <button className="flex right-3 bottom-0 absolute items-center gap-2 font-light text-xs bg-Ashish-500 text-white  p-4 rounded-full"><BiFilterAlt className="text-lg  shadow-md"/></button>
                </div>
                </div>
            <div>
            <div className="z-10 sticky top-0 lg:relative w-full">
                <PlaysNavbar />
            </div>
                <div className="lg:hidden p-4">
                    <img className="w-full h-full" src="https://in.bmscdn.com/promotions/default/le-carousel_v2.png" alt="poster_img" />
                </div >
                <div className="relative ">
                    <div className="sticky lg:absolute h-16 z-10 bg-white top-16">
                        <HelpBar />
                    </div>
                    <div className="bg-gray-100">
                    {props.children}
                    </div>
                </div> 
            </div>
        </div>
        </>
};

export default PlaysLayout ;