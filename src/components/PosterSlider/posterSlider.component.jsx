import React from "react";
import Slider from "react-slick";

//component
import Poster from "../Poster/poster.component";

//config
import PosterSliderSettings from "../../config/PosterCarousal.config";



const PosterSlider =(props)=>{
    const sliderConfig = props.config ? props.config : PosterSliderSettings ;

    return <> 
        <div className="container mx-auto ">
        <div className="px-3 pt-12 pb-2 ">
        <h1 className={`font-bold ${props.isDark ?"text-white" :"text-gray-800"} text-2xl`}>{props.title}</h1>
        <h3 className={`${props.isDark ?"text-white" :"text-gray-800"} font-ligth text-sm`}>{props.subtitle}</h3>
        </div>
        <Slider {...sliderConfig}>
            {props.images.map((image)=>{
                return <Poster {...image} isDark={props.isDark}/>
            })}
        </Slider>
        </div>
    </>
};

export default PosterSlider;