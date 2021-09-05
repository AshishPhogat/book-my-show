import React from "react";
import HeroSlider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroCarousal = ()=>{

    const settings = {
        dots: true,
        arrows:true,
        infinite: true,
        speed: 500,
        centerPadding:"200px",
        slidesToShow: 1,
        innerWidth:"3/4",
        centerMode:true,
        slidesToScroll: 1
      };
      const images=["https://images.unsplash.com/photo-1593642532781-03e79bf5bec2?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
                    "https://images.unsplash.com/photo-1630682225118-143e772826ba?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
                    "https://images.unsplash.com/photo-1630661298159-adecbf1222c2?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
                    "https://images.unsplash.com/photo-1630683392459-f316bea8e7ed?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"];

    return <> 
        <HeroSlider  {...settings}>
            {images.map((image)=>{
                return (<div className="h-96">
                    <img src={image} alt="testing" className="w-full h-full" />
                </div>)
            })}
        </HeroSlider>

    </>
};

export default HeroCarousal ;