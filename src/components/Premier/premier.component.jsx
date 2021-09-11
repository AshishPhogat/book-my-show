import React from "react";
import Slider from "react-slick";

//component 
import Poster from "../Poster/poster.component";

//confing
import PosterCarousalSettings from "../../config/PosterCarousal.config";
import PremierPosterImages from "../../config/TempPosters.config";
const Premier =()=>{

    return <> 
        <div className="px-5 pt-12 pb-2">
        <h1 className="font-bold text-white text-2xl">Premieres</h1>
        <h3 className="text-white font-ligth text-sm">Brand new releases every Friday</h3>
        </div>
        <Slider {...PosterCarousalSettings}>
            {PremierPosterImages.map((image)=>{
                return <Poster {...image} isDark="true"/>
            })}
        </Slider>
    </>
};

export default Premier;