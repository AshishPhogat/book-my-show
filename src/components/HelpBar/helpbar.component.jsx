import React from "react";

const HelpBar=()=>{
    return<> 
        <div className="lg:hidden flex  gap-2 p-4 overflow-scroll">
            <div className="border-2 border-gray-300 flex focus:bg-pink-500 items-center  rounded-full">
                <button className="text-pink-400 text-xs bg-white focus:bg-pink-500 px-5 focus:border-pink-500 focus:ring-0 focus:text-white rounded-full  p-2 ">Today</button>
            </div>
            <div className="border-2 border-gray-300 flex focus:bg-pink-500 items-center  rounded-full">
                <button className="text-pink-400 text-xs bg-white focus:bg-pink-500 px-5 focus:border-pink-500 focus:ring-0 focus:text-white rounded-full  p-2 ">Tomorrow</button>
            </div>
            <div className="border-2 border-gray-300 flex focus:bg-pink-500 items-center  rounded-full">
                <button className="text-pink-400 text-xs bg-white focus:bg-pink-500 px-5 focus:border-pink-500 focus:ring-0 focus:text-white rounded-full  p-2 ">Weekend</button>
            </div>
            <div className="border-2 border-gray-300 flex focus:bg-pink-500 items-center  rounded-full">
                <button className="text-pink-400 text-xs bg-white focus:bg-pink-500 px-5 focus:border-pink-500 focus:ring-0 focus:text-white rounded-full  p-2 ">BingeWatch</button>
            </div>
            <div className="border-2 border-gray-300 flex focus:bg-pink-500 items-center  rounded-full">
                <button className="text-pink-400 text-xs bg-white focus:bg-pink-500 px-5 focus:border-pink-500 focus:ring-0 focus:text-white rounded-full  p-2 ">Streaming</button>
            </div>
        </div>
    </>
};

export default HelpBar;