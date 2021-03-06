import { NextArrow,PrevArrow } from "../components/heroCarousal/arrows.component";

const settings ={
    inFinite : false,
    autoplay : false,
    slidesToShow : 5,
    slidesToScroll : 2,
    InitialSlide : 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    Arrow: true,
    responsive : [{
        breakpoint : 1024,
        settings : {
            slidesToShow : 5,
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
            slidesToShow : 3,
            // centerMode:true,
            slidesToScroll : 1,
        },
    }],
};


export default settings;

