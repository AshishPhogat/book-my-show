import React from "react";
import HeroSlider from "react-slick";

//component
import { NextArrow,PrevArrow } from "./arrows.component";



const HeroCarousal = ()=>{
    
    const settingsLg={
        arrows:true,
        autoplay:true,
        centerMode:true,
        centerPadding:"300px",
        slidesToScroll:1,
        slidesToShow:1,
        infinite: true,
        speed:500,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />

    };
    const settings = {
        dots: false,
        arrows:true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      const images=["https://images.unsplash.com/photo-1593642532781-03e79bf5bec2?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
                    "https://images.unsplash.com/photo-1630682225118-143e772826ba?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
                    "https://images.unsplash.com/photo-1630661298159-adecbf1222c2?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
                    "https://images.unsplash.com/photo-1630683392459-f316bea8e7ed?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"];

    return <> 

        <div className="lg:hidden">
        <HeroSlider  {...settings}>
            {images.map((image)=>{
                return (<div className="w-full h-52 md:h-96 py-3">
                    <img src={image} alt="testing" className="w-full h-full lg:rounded-sm" />
                </div>)
            })}
        </HeroSlider>
        </div>
        <div className="hidden lg:block">
        <HeroSlider  {...settingsLg }>
            {images.map((image)=>{
                return (<div className="w-full px-2 h-80">
                    <img src={image} alt="testing" className="w-full h-full" />
                </div>)
            })}
        </HeroSlider> 
        </div>
        

    </>
};

export default HeroCarousal ;