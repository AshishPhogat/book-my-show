import axios from "axios";
import React, { useEffect,useState } from "react";
import HeroSlider from "react-slick";

//component
import { NextArrow,PrevArrow } from "./arrows.component";



const HeroCarousal = ()=>{
    const [images,setImages] = useState([]);
    //Hooks should always be on the topic of all of the component logic;

    useEffect(()=>{
        const requestNowPlayingMovies = async()=>{
                const getImages  = await axios.get("/movie/now_playing");
                setImages(getImages.data.results);
        }

        requestNowPlayingMovies();
    },[]);

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

    return <> 

        <div className="lg:hidden">
        <HeroSlider  {...settings}>
            {images.map((image)=>{
                return (<div className="w-full h-52 md:h-96 py-3">
                    <img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} alt="testing" className="w-full h-full lg:rounded-sm" />
                </div>)
            })}
        </HeroSlider>
        </div>
        <div className="hidden lg:block">
        <HeroSlider  {...settingsLg }>
            {images.map((image)=>{
                return (<div className="w-full px-2 h-80">
                    <img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} alt="testing" className="w-full h-full" />
                </div>)
            })}
        </HeroSlider> 
        </div>
        

    </>
};

export default HeroCarousal ;