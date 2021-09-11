import React from "react";
import Slider from "react-slick";

//component
import Poster from "../Poster/poster.component";

//config
import PosterSliderSettings from "../../config/PosterCarousal.config";



const PosterSlider =(props)=>{

    return <> 
        <div className="px-3 pt-12 pb-2">
        <h1 className={`font-bold ${props.isDark ?"text-white" :"text-gray-800"} text-2xl`}>{props.title}</h1>
        <h3 className={`${props.isDark ?"text-white" :"text-gray-800"} font-ligth text-sm`}>{props.subtitle}</h3>
        </div>
        <Slider {...PosterSliderSettings}>
            {props.images.map((image)=>{
                return <Poster {...image} isDark={props.isDark}/>
            })}
        </Slider>
    </>
};

export default PosterSlider;