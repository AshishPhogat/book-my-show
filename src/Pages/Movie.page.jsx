import {FaCcVisa,FaCcApplePay} from "react-icons/fa";

//component
import MovieHero from "../components/MovieHero/movieHero.component";
import Cast from "../components/Cast/cast.component";
import PosterSlider from "../components/PosterSlider/posterSlider.component";

// config
import TempPosters from "../config/TempPosters.config";



const Movie = () =>{

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
    
    
    
    
    return<> 
        <MovieHero />
        <div className="container hidden mx-auto px-4 py-2 lg:flex lg:flex-col lg:gap-3 ">

            <h2 className="font-semibold text-2xl ">About the movie</h2>
            <p className="w-5/6 pb-5 tracking-wider text-gray-700">Bruce Wayne and Diana Prince try to bring the metahumans of Earth together after the death of Clark Kent.Meanwhile,Darkseid 
            sends Steppenwolf to Earth with an army to subjugate humans.</p>
            <hr className="w-full  mt-2 lg:w-4/5"/>
        </div>

        <div className="container mx-auto px-4 py-2 lg:flex lg:flex-col lg:gap-6 ">

            <h2 className="font-semibold my-3 text-2xl ">Applicable offers</h2>
            <div className=" flex md:flex-col md:gap-5 lg:flex w-3/4 md:w-full  gap-5 ">
                <div className="flex md:h-24 items-start p-2 gap-2 bg-yellow-100 border-2 border-dashed border-yellow-500 rounded-md">
                    <FaCcVisa className="text-2xl"/>
                    <div className="flex flex-col gap-3 items-start">
                    <h3 className="font-semibold">Visa Stream Offer</h3>
                    <p>Get 50% off up to INR 150 on all Visa cards* on BookMyShow Stream .</p>
                    </div>
                </div >
                <div className="flex md:h-24 items-start p-2 gap-2  bg-yellow-100 border-2 border-dashed border-yellow-500 rounded-md">
                    <FaCcApplePay className="text-2xl"/>
                    <div className="flex flex-col gap-3 items-start">
                    <h3 className="font-semibold">Apple Stream Offer</h3>
                    <p>Get 50% off up to INR 150 on all apple cards* on BookMyShow Stream .</p>
                    </div>
                </div>
            </div>
            <hr className="w-full  mt-5 lg:w-4/5"/>
            
            <div className=" flex flex-col gap-4">
                <h1 className="font-semibold my-3 text-2xl "> Cast & Crew</h1>
            <div className="flex flex-wrap gap-4 ">
                <Cast image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/henry-cavill-23964-04-05-2020-04-25-14.jpg" castName="Henry Cavill" role="as Superman" />
                <Cast image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/gal-gadot-11088-17-10-2017-11-45-36.jpg" castName="Gal Gadot" role="Wonder Woman" />
                <Cast image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/ben-affleck-292-12-09-2017-05-12-16.jpg" castName="Ben Affleck" role="as BatMan" />
            </div>
            <hr className="w-full  mt-2 lg:w-4/5"/>

            </div>

            <div className="-mt-6">
                <PosterSlider config={settings} isDark={false} images={TempPosters} title={`You might also like`} subtitle=""/>   
                <hr className="w-full  mt-8 lg:w-4/5"/>
                <PosterSlider config={settings} isDark={false} images={TempPosters} title={`BMS XCLUSIVE`} subtitle=""/>      
            </div>

        </div>
    </>
};

export default Movie ;