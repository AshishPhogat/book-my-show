import React from "react";
import Slider from "react-slick";

//component 
import Poster from "../Poster/poster.component";




const Premier =()=>{

    //slider settings
    const settings ={
        inFinite : false,
        autoplay : false,
        slidesToShow : 5,
        slidesToScroll : 2,
        InitialSlide : 0,
        
        responsive : [{
            breakpoints : 1024,
            settings : {
                slidesToShow : 3,
                slidesToScroll : 2,
                inFinite : true,
            },
        },
        {
            brakpoints : 600,
            settings : {
                slidesToShow : 3,
                slidesToScroll : 1,
                InitialSlide :  1,
            },
                
            },
        {
            breakpoints : 480,
            settings : {
                slidesToShow : 2,
                slidesToScroll : 1,
            },
        }],
    };

    const PremierImages=[{
        src:"https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/boss-level-et00312838-22-07-2021-11-34-27.jpg",
        alt :"zack",
        title:"Zalc",
        subtitle:"English"
    },{
        src:"https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/boss-level-et00312838-22-07-2021-11-34-27.jpg",
        alt :"zack",
        title:"Zalc",
        subtitle:"English"
    },{
        src:"https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/boss-level-et00312838-22-07-2021-11-34-27.jpg",
        alt :"zack",
        title:"Zalc",
        subtitle:"English"
    },{
        src:"https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/boss-level-et00312838-22-07-2021-11-34-27.jpg",
        alt :"zack",
        title:"Zalc",
        subtitle:"English"
    },{
        src:"https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/boss-level-et00312838-22-07-2021-11-34-27.jpg",
        alt :"zack",
        title:"Zalc",
        subtitle:"English"
    },];

    return <> 
        <Slider {...settings}>
            {PremierImages.map((image)=>{
                return <Poster {...image} />
            })}
        </Slider>
    </>
};

export default Premier;