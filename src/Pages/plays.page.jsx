import React,{useEffect,useState} from "react";
import axios from "axios";

//config
import Images from "../config/Plays.images";

//component
import Poster from "../components/Poster/poster.component";
import Filters from "../components/Plays.Filters/filters.component";


const Plays=()=>{
    const [plays,setPlays] = useState([]);

    useEffect(()=>{
        const requestPlays = async()=>{
            const getPlays = await axios.get(`/movie/upcoming`);
            // console.log("below is the plays list");
            // console.log(getPlays.data.results);
            setPlays(getPlays.data.results);
        }
        requestPlays();
    });

    const images=[...Images];

    return <> 
        <div className="container mx-auto px-3 py-16 relative ">
            <div className=" flex gap-10">
                <div className=" hidden lg:flex lg:w-1/3 lg:flex-col">
                <h1 className="text-2xl font-semibold mb-4 text-gray-800">Filters</h1>
                <div className="flex flex-col gap-4">
                    <div className="flex  flex-col  gap-3">
                        <Filters filterby="Date" tags={["Today","Tomorrow","The Weekend"]} />
                        <Filters filterby="Language" tags={["English","Kannad","Hindi"]}/>
                        <Filters filterby="Categories" tags={["Theatre"]}/>
                        <Filters filterby="Generes" tags={["Comedy","Drama","Historical","Political"]}/>
                        <Filters filterby="More Filters" tags={["Online Streaming","Outdoor Events"]}/>
                        <Filters filterby="Price" tags={["Free","0-500","501-2000","Above 2000"]}/>
                    </div>
                    <div className="text-Ashish-500 flex justify-center border-2 px-2 py-1 text-sm rounded-md border-Ashish-500 ">Browse by Venues</div>
                </div>
                </div>
                <div className="w-full flex flex-col gap-3">
                    <div className="hidden lg:block">
                        <h1 className="text-2xl font-semibold text-gray-800">Plays in Bengaluru</h1>
                        <div >
                        <div className=" w-20 flex focus:bg-pink-500 items-center">
                            <button className="text-pink-400 text-xs border-2 border-gray-300 bg-white focus:bg-pink-500 px-2 focus:border-pink-500 focus:ring-0 focus:text-white rounded-full py-2">Theatre</button>
                        </div>
                    </div>
                    </div>
                    <div className="container flex flex-wrap gap-1 lg:gap-5">
                        {plays.map((play)=>{
                            return (
                                <div>
                                <Poster  original_title={play.original_title} id={play.id} poster_path={play.poster_path} />
                                </div>)
                        })}
                    </div>
                </div>
            
            </div>
            <div></div>
        </div>
    </>
};

export default Plays;
