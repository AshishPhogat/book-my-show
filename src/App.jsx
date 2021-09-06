import { Route } from "react-router";

//HOC
import DefaultHOC from "./HOC/default.HOC";

//component
import HomePage from "./Pages/home.page";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App(){
  return <>
    <DefaultHOC path="/" exact component={()=>{
      return(<> 
         <HomePage />
      </>);

    }} />
     <DefaultHOC path="/movie" exact component={()=>{
      return(<> 
         <HomePage />
      </>);

    }} />
  </>
}

export default App;
