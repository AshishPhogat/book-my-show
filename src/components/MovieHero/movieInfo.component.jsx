import React,{useContext,useState} from "react";

//components
import PaymentModal from "../PaymentModal/payment.component";

//context
import { MovieContext } from "../../context/movie.context";
const MovieInfo =()=>{

    const {movie} = useContext(MovieContext);
    const [isOpen,setIsOpen] = useState(false);
    const [price,setPrice] = useState(0);

    const rentMovies =()=>{
        setIsOpen(true);
        setPrice(149);
    };
    const buyMovies =()=>{
        setIsOpen(true);
        setPrice(599);
    };
    return <> 
        <PaymentModal isOpen={isOpen} setIsOpen={setIsOpen}  price={price} />
        <div className="flex flex-col items-start gap-3 p-1 md:p-3">
            <div className="flex  gap-3">
                <div className=" h-6">
                    <img className="w-full h-full" src="https://in.bmscdn.com/moviemode/tvod/premiere-tag.png" alt="premier"/>
                </div>
                <div className="w-40 h-8">
                    <span className="bg-bms-700 p-1 text-white font-light text-xs rounded-md ">Streaming Now</span>
                </div>
            </div>
            <h1 className="text-white hidden lg:block text-4xl font-semibold ">{movie.original_title}</h1>
            
            <div className="flex flex-col-reverse gap-2  lg:block">
            
            <div className="flex relative flex-col gap-3">

            <div className="flex items-center  text-xs lg:text-base gap-1 ">
                <h3 className="text-gray-300 hover:underline ">English</h3>
                <li className="list-disc   text-gray-300">Language:</li>
                <a className="text-red-700 hover:underline" href="#">Audio(1),Subtitles(1)</a>
            </div>

            <div className="flex items-center  text-xs lg:text-base gap-2">
                <h3 className="text-white font-light hover:underline ">4h 1m</h3>
                <li className="list-disc  text-white font-light">Action,Adventure,Fantasy</li>
                <li className="list-disc  text-white font-light">16+</li>
                <li className="list-disc  text-white font-light">18Mar,2021</li>
            </div>
            
            <p className="bottom-0 text-gray-300 text-xs md:text-md lg:hidden ">
                Bruce Wayne and Diana Prince try to bring the metahumans of Earth together after the death of Clark <span className="text-red-500">...more</span>
            </p>

            </div>

            <div className="flex gap-4 items-center justify-evenly md:w-screen lg:w-full md:pr-4 lg:flex my-2">
            <button onClick={rentMovies} className="bg-red-600 bg-opcity-50 text-white text-base  px-9 py-1 md:px-36 rounded-lg md:py-3">Rent ₹149</button>
            <button onClick={buyMovies} className="bg-red-600 bg-opcity-50 text-white text-base  px-9 py-1  md:px-36 rounded-lg md:py-3">Buy ₹689</button>
            </div>
            
            </div>
            </div>
    </>
};

export default MovieInfo;