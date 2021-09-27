import React,{useEffect,useState}  from "react";
import axios from "axios";

//component 
import EntertainmentCardSlider from "../components/Entertainment.cpp/Entertainment.component";
import Premier from "../components/Premier/premier.component";
import PosterSlider from "../components/PosterSlider/posterSlider.component";

// config
import TempPosters from "../config/TempPosters.config";


const HomePage=() => {

    const [popularMovies,setPopularMovies] = useState([]);
    const [upcoming,setUpcoming] = useState([]);
    const [latest,setLatest] = useState([]);
    const [nowPlaying,setNowPlaying] = useState([]);

    useEffect(()=>{
        const requestPopularMovies = async()=>{
            const getPopularMovies = await axios.get("/movie/popular");
            setPopularMovies(getPopularMovies.data.results);
        }

        requestPopularMovies();
    },[])

    useEffect(()=>{
        const requestUpcoming = async()=>{
            const getUpcoming = await axios.get("/movie/upcoming");
            setUpcoming(getUpcoming.data.results);
        }

        requestUpcoming();
    },[])

    useEffect(()=>{
        const requestLatest = async()=>{
            const getTopRated = await axios.get("/movie/top_rated");
            console.log(getTopRated);
            setLatest(getTopRated.data.results);
        }

        requestLatest();
    },[])

    useEffect(()=>{
        const requestNowPlaying = async()=>{
            const getNowPlaying = await axios.get("/movie/now_playing");
            console.log(getNowPlaying);
            setNowPlaying(getNowPlaying.data.results);
        }

        requestNowPlaying();
    },[])

    return <> 

        <div className="container mx-auto px-4 lg:mb-8">
        <PosterSlider isDark={false} images={popularMovies} title={`Recommended Movies `} subtitle=""/>      
        </div>

    <div>
        <div className="container mx-auto px-4 my-8 lg:my-24">
            <img className="w-full h-full" src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/lead-in-v3-collection-202102040828.png" alt="Shows_below" />
        </div>
    </div>

    <div>
        <div className="container mx-auto px-4">
            <h1 className="font-bold text-2xl text-gray-800 px-4 my-3">The Best of Entertainment</h1>
            <EntertainmentCardSlider />
        </div>
    </div>
    
    <div className=" bg-bms-800 py-11 mt-16 "> 
        <div className=" md:px-28">
        <div  className="w-full h-10 md:h-28 ">
            <img className="w-full h-full " src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png" alt="Premier_logo" />
        </div>
        </div>
        <div className="container mx-auto px-4 ">
        <PosterSlider isDark={true} images={upcoming} title="Premieres" subtitle="Brand new releases every Friday"/>      
        </div>
    </div>

       <div className="bg-gray-100 p-2 mb-20">

                <div className="container mx-auto px-4 -mt-3 mb-8">
                <PosterSlider isDark={false} images={latest} title="Online Streaming Events" subtitle=""/>      
                </div>

                <div className="container mx-auto px-4 my-8">
                <PosterSlider isDark={false} images={nowPlaying} title={`Outdoors Events `} subtitle=""/>      
                </div>

                <div className="container mx-auto px-4 my-8">
                <PosterSlider isDark={false} images={upcoming} title={`Laughter Therapy`} subtitle=""/>      
                </div>

                <div className="container mx-auto px-4 my-8">
                <PosterSlider isDark={false} images={nowPlaying} title={`Popular Events`} subtitle=""/>      
                </div>

        </div>
    </>
};

export default HomePage ;