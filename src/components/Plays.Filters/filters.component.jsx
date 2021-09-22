import React from "react";
import {FiChevronDown} from "react-icons/fi";


const Filters=(props)=>{
    return<>
        <div className="flex  items-center justify-between  rounded-md bg-white p-4" style={{height: "3.5rem"}}>
            <div className="flex gap-3 items-center ">
                <FiChevronDown className="font-thin text-sm" />
                <h3 className="text-sm ">{props.filterby}</h3>
            </div>
            <div className="text-gray-500 font-light text-xs">Clear</div>
        </div>
    </>
};

export default Filters;