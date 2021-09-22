import React from "react";

//config
import Images from "../config/Plays.images";

//component
import Poster from "../components/Poster/poster.component";
import Filters from "../components/Plays.Filters/filters.component";


const Plays=()=>{
    const images=[...Images];

    return <> 
        <div className="container mx-auto px-3 py-16 relative ">
            <div className=" flex gap-10">
                <div className=" hidden lg:flex lg:w-1/3 lg:flex-col">
                <h1 className="text-2xl font-semibold mb-4 text-gray-800">Filters</h1>
                <div className="flex flex-col gap-4">
                    <div className="flex  flex-col  gap-3">
                        <Filters filterby="Date"/>
                        <Filters filterby="Language"/>
                        <Filters filterby="Categories"/>
                        <Filters filterby="Generes"/>
                        <Filters filterby="More Filters"/>
                        <Filters filterby="Price"/>
                    </div>
                </div>
                </div>
                <div className="w-full flex flex-col gap-3">
                    <div className="hidden lg:block">
                        <h1 className="text-2xl font-semibold text-gray-800">Plays in Bengaluru</h1>
                        <div >
                        <div className=" w-20 flex focus:bg-pink-500 items-center">
                            <button className="text-pink-400 text-xs border-2 border-gray-300 bg-white focus:bg-pink-500 px-2 focus:border-pink-500 focus:ring-0 focus:text-white rounded-full py-2">Theatre</button>
                        </div>
                    </div>
                    </div>
                    <div className="container flex flex-wrap gap-1">
                        {images.map(({subtitle,title,writer,cost,src})=>{
                            return (
                                <div>
                                <Poster subtitle={subtitle} title={title} writer={writer} cost={cost} src={src} />
                                </div>)
                        })}
                    </div>
                </div>
            
            </div>
            <div></div>
        </div>
    </>
};

export default Plays;
