import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";


//component
import {PrevArrow,NextArrow} from "../heroCarousal/arrows.component" ;

const EntertainmentCard =(props)=>{
    return <Link to ={`/plays/123}`}> 
        <div className="w-full  h-64 px-5  "> 
            <img  className="w-full h-full rounded-lg" src={props.src} alt="Entertainment_image" /> 
        </div>
    </Link>
};

const EntertainmentCardSlider =()=>{

    const EntertainmentImages = ["https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTE1KyBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/workshops-collection-202007231330.png",
                                        "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-OSBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/fitness-collection-2020081150.png",
                                    "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MjArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/kids-collection-202007220710.png",
                                "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-NTUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/comedy-shows-collection-202007220710.png",
                                    " https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-OCBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/music-shows-collection-202007220710.png",
                                "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/esports-collection-202011150107.png",
                                "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-OSBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/self-improvement-collection-202007220710.png",
                            "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MSBFdmVudA%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/food-n-drinks-collection-202010061250.png"] ;

    const settings ={
        inFinite : false,
        autoplay : false,
        slidesToShow : 4,
        slidesToScroll : 4,
        centerPadding :"500px",
        InitialSlide : 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive : [{
            breakpoint : 1024,
            settings : {
                slidesToShow : 3,
                slidesToScroll : 2,
                inFinite : true,
            },
        },
        {
            breakpoint : 600,
            settings : {
                slidesToShow : 3,
                slidesToScroll : 1,
                InitialSlide :  1,
            },
                
            },
        {
            breakpoint : 480,
            settings : {
                slidesToShow : 2,
                slidesToScroll : 1,
            },
        }],
    };

    return <> 
        <Slider {...settings}>
            {EntertainmentImages.map((image) => {
                return <EntertainmentCard  src={image} />
            })}
        </Slider>
    </>
};

export default EntertainmentCardSlider ;