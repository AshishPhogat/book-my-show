import React  from "react";

//component 
import EntertainmentCardSlider from "../components/Entertainment.cpp/Entertainment.component";
import Premier from "../components/Premier/premier.component";

const HomePage=() => {
    return <> 
    <div className="container mx-auto px-4">
        <h1 className="font-bold text-2xl text-gray-800 px-4 my-3">The Best of Entertainment</h1>
    <EntertainmentCardSlider />
    <Premier />
    </div>
    </>
};

export default HomePage ;