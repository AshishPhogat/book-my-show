import {FaCcVisa,FaCcApplePay} from "react-icons/fa";
import React,{useContext,useState,useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router";
import Slider from "react-slick";

//component
import MovieHero from "../components/MovieHero/movieHero.component";
import Cast from "../components/Cast/cast.component";
import PosterSlider from "../components/PosterSlider/posterSlider.component";

// config
import TempPosters from "../config/TempPosters.config";

//context 
import { MovieContext } from "../context/movie.context";

const Movie = () =>{
    const {id} = useParams();
    const  {movie} = useContext(MovieContext);

    const settings ={
        inFinite : false,
        autoplay : false,
        slidesToShow : 4,
        slidesToScroll : 2,
        InitialSlide : 0,
        Arrow: true,
        responsive : [{
            breakpoint : 1024,
            settings : {
                slidesToShow : 4,
                slidesToScroll : 2,
                inFinite : true,
            },
        },
        {
            breakpoint : 768,
            settings : {
                slidesToShow: 3,
                slidesToScroll: 2,
                initialSlide: 2
            },
                
        },
        {
            breakpoint : 360,
            settings : {
                slidesToShow : 2,
                centerMode:true,
                slidesToScroll : 1,
            },
        }],
    };

    const settingsCast ={
        inFinite : false,
        speed:500,
        slidesToShow : 6,
        slidesToScroll : 2,
        InitialSlide : 0,
        Arrow: true,
        responsive : [{
            breakpoint : 1024,
            settings : {
                slidesToShow : 4,
                slidesToScroll : 2,
                inFinite : true,
            },
        },
        {
            breakpoint : 768,
            settings : {
                slidesToShow: 5,
                slidesToScroll: 2,
                initialSlide: 2
            },
                
        },
        {
            breakpoint : 360,
            settings : {
                slidesToShow : 2,
                centerMode:true,
                slidesToScroll : 1,
            },
        }],
    };

    const [cast,setCast] = useState([]);
    const [similarMovies,setSimilarmovies] = useState([]);
    const [recommended,setRecommended] = useState([]);

    useEffect(()=>{
        const requestCast = async()=>{
           const getCast = await axios.get(`/movie/${id}/credits`);
            setCast(getCast.data.cast);
        }
        requestCast();
    },[id]);
    
    useEffect(()=>{
        const requestsimilar = async()=>{
           const getSimilarMovies = await axios.get(`/movie/${id}/similar`);
            setSimilarmovies(getSimilarMovies.data.results);
        }
        requestsimilar();
    },[id]);
  
    useEffect(()=>{
        const requestRecommended = async()=>{
           const getRecommendedMovies = await axios.get(`/movie/${id}/recommendations`);
            setRecommended(getRecommendedMovies.data.results);
        }
        requestRecommended();
    },[id]);
    console.log(movie);
    return<> 
        <MovieHero />
        <div className="container hidden mx-auto px-4 py-2 lg:flex lg:flex-col lg:gap-3 ">

            <h2 className="font-semibold text-2xl ">About the movie</h2>
            <p className="w-5/6 pb-5 tracking-wider text-gray-700">{movie.overview}</p>
            <hr className="w-full  mt-2 lg:w-4/5"/>
        </div>

        <div className="container mx-auto px-4  py-2 lg:flex lg:flex-col lg:gap-6 ">
            <h2 className="font-semibold my-3 text-2xl ">Applicable offers</h2>
            <div className=" flex md:flex-col md:gap-5 lg:flex w-3/4 md:w-full  gap-5 ">
                <div className="flex md:h-24 items-start w-3/4 p-2 gap-2 bg-yellow-100 border-2 border-dashed border-yellow-500 rounded-md">
                    <FaCcVisa className="text-2xl"/>
                    <div className="flex flex-col gap-3 items-start">
                    <h3 className="font-semibold">Visa Stream Offer</h3>
                    <p>Get 50% off up to INR 150 on all Visa cards* on BookMyShow Stream .</p>
                    </div>
                </div >
                <div className="flex md:h-24 w-3/4 items-start p-2 gap-2  bg-yellow-100 border-2 border-dashed border-yellow-500 rounded-md">
                    <FaCcApplePay className="text-2xl"/>
                    <div className="flex flex-col gap-3 items-start">
                    <h3 className="font-semibold">Apple Stream Offer</h3>
                    <p>Get 50% off up to INR 150 on all apple cards* on BookMyShow Stream .</p>
                    </div>
                </div>
            </div>
            <hr className="w-full  mt-5 lg:w-4/5"/>
            
            <div className=" flex flex-col   gap-4">
                <h1 className="font-semibold my-3 text-2xl "> Cast & Crew</h1>
                <div className="container w-3/4 left-0 ">
                    <Slider {...settingsCast} >
                        {cast.map((data)=>{
                            return (
                                <Cast image={`https://image.tmdb.org/t/p/original/${data.profile_path}`} role={data.character} castName={data.original_name} />
                            );
                        })}
                    </Slider>
                </div>
            <hr className="w-full  mt-2 lg:w-4/5"/>

            </div>

                <div className="container -mt-6">
                <PosterSlider config={settings} isDark={false} images={similarMovies} title={`You might also like`} subtitle=""/>   
                </div>
                <hr className="w-full  mt-8 lg:w-4/5"/>
                <div className="container -mt-6">
                <PosterSlider config={settings} isDark={false} images={recommended} title={`BMS XCLUSIVE`} subtitle=""/>      
                </div>
        </div>
    </>
};

export default Movie ;