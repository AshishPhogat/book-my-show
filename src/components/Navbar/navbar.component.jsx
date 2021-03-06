import React from "react";
import {BiChevronRight,BiSearch} from "react-icons/bi"
import {IoMdArrowDropdown,IoIosMenu} from "react-icons/io"

const NavSm = () => {
    return <> 
        <div className = "flex items-center justify-between h-10">
            <div  >
                <h3 className ="text-xl font-bold  pt-3 h-12">It All Starts Here!</h3>
                <span className = "text-xs text-bms-200 flex items-center pb-1.5 font-light ">
                    Bengaluru <BiChevronRight />
                </span>
            </div>
            <div>
                <BiSearch className = "text-2xl"/>
            </div>
        </div>
    </>
};
const NavMd = () => {
    return (
        <> 
           <div className ="flex items-center w-full bg-white gap-3 px-3 py-2 rounded-sm">
               <BiSearch  className ="text-bms-500 text-xl" />
               <input type = "search" 
               placeholder = "Search for Movies,Events,Plays,Sports and Activities" 
               className = "w-full bg-transparent border-none focus:outline-none" />
           </div>
        </>
    );
};
const NavLg = () => {
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



const Navbar= ()=>{
    return <> 
        <nav className = "bg-bms-700 text-white p-4 md:pb-0 lg:p-4">
            <div className = "md:hidden">
                {/*Mobile devices */}
                <NavSm />
            </div>
            <div className = "hidden  md:flex lg:hidden">
                {/*Medium screen devices */}
                <NavMd />
                </div>
            <div className = "hidden lg:flex ">
                {/*Large screen devices */}
                <NavLg />
                </div>
        </nav>
    </>
};

export default Navbar ;