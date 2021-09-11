import React  from "react";

//component 
import EntertainmentCardSlider from "../components/Entertainment.cpp/Entertainment.component";
import Premier from "../components/Premier/premier.component";
import PosterSlider from "../components/PosterSlider/posterSlider.component";

// config
import TempPosters from "../config/TempPosters.config";


const HomePage=() => {
    return <> 

        <div className="container mx-auto px-4 mb-8">
        <PosterSlider isDark={false} images={TempPosters} title={`Recommended Movies `} subtitle=""/>      
        </div>

    <div className="container mx-auto px-4 my-24">
        <img className="w-full h-full" src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/lead-in-v3-collection-202102040828.png" alt="Shows_below" />
    </div>

    <div className="container mx-auto px-4">
        <h1 className="font-bold text-2xl text-gray-800 px-4 my-3">The Best of Entertainment</h1>
    <EntertainmentCardSlider />
    </div>
    
    <div className=" bg-bms-800 py-11 mt-16 "> 
        <div className=" md:px-28">
        <div  className="w-full h-10 md:h-28 ">
            <img className="w-full h-full " src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png" alt="Premier_logo" />
        </div>
        </div>
        <div className="container mx-auto px-4 ">
        <PosterSlider isDark={true} images={TempPosters} title="Premieres" subtitle="Brand new releases every Friday"/>      
        </div>
    </div>

       <div className="bg-gray-100 p-2 mb-20">
        <div className="container mx-auto px-4 -mt-3 mb-8">
            <PosterSlider isDark={false} images={TempPosters} title="Online Streaming Events" subtitle=""/>      
            </div>

            <div className="container mx-auto px-4 my-8">
            <PosterSlider isDark={false} images={TempPosters} title={`Outdoors Events `} subtitle=""/>      
            </div>

            <div className="container mx-auto px-4 my-8">
            <PosterSlider isDark={false} images={TempPosters} title={`Laughter Therapy`} subtitle=""/>      
            </div>

            <div className="container mx-auto px-4 my-8">
            <PosterSlider isDark={false} images={TempPosters} title={`Popular Events`} subtitle=""/>      
            </div>

            <div className="container mx-auto px-4 my-8">
            <PosterSlider isDark={false} images={TempPosters} title={`Top Games & Sports Events`} subtitle=""/>      
            </div>

            <div className="container mx-auto px-4 my-8">
            <PosterSlider isDark={false} images={TempPosters} title={`Explore Fun Activities`} subtitle=""/>      
            </div>

        </div>
    </>
};

export default HomePage ;