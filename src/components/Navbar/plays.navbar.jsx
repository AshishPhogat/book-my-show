import React from "react";
import {IoIosArrowBack,IoMdArrowDropdown,IoIosMenu} from "react-icons/io";
import {BiSearch} from "react-icons/bi";


const NavSM=()=>{
    return <>
        <div className="flex items-center justify-between p-2">
            <div className="flex gap-3 items-center">
                <div >
                    <IoIosArrowBack className="text-white text-4xl font-thin" />
                </div>
                <div>
                    <h3 className="text-gray-200 font-normal">Plays</h3>
                    <h5 className="text-xs text-bms-50 flex items-center pb-1.5 font-light ">Bengaluru | 18 Events</h5>
                </div>
            </div>
            <div>
                <BiSearch className = "text-white text-2xl  text-bms-50"/>
            </div>
        </div>
    </>
};

const NavLg =()=>{
    return(
        <>
        <div className="container mx-auto px-4 items-center flex justify-between">
            <div className="flex items-center w-1/2 gap-3">
                <div className="w-10 h-8">
                    <img  className="h-full w-full" 
                    src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/v1490416068/snddxyieomgp4s7sj7bp.png" 
                    alt="logo" 
                    />
                </div>
                <div className ="flex items-center w-full bg-white gap-3 px-3 py-1.5 rounded-sm">
                    <BiSearch  className ="text-bms-500 text-xl" />
                    <input type = "search" 
                    placeholder = "Search for Movies,Events,Plays,Sports and Activities" 
                    className = "w-full bg-transparent border-none focus:outline-none" />
                </div>
            </div>
            <div className="flex items-center gap-5 hover:cursor-pointer ">
                <span className = "text-sm font-normal text-bms-200 flex items-center pb-1.5 font-light hover:text-white transition hover:ease-in hover:duration-700 ">
                        Bengaluru <IoMdArrowDropdown className="text-gray-50 text-lg" />
                </span>
                
                
                <button className="bg-red-600 py-1 px-3 rounded-md w-18 text-xs font-light hover:cursor-pointer">Sign in</button>
                <div className="w-8 h-8 ">
                    <IoIosMenu className="w-full h-full "/>
                </div>
            </div>
        </div>
        </>
    );
};
const PlaysNavbar =()=>{
    return <> 
    <div className="bg-bms-800 p-1 lg:p-2 ">
        {/* small and medium devices */}
        <div className="lg:hidden">
            <NavSM />
        </div>

        {/* large devices */}
        <div className="hidden lg:block">
            <NavLg />
        </div>
    </div>
    </>
};


export default PlaysNavbar ;