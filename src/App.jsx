import { Route } from "react-router";

//HOC
import DefaultHOC from "./HOC/default.HOC";

//component
import Temp from "./components/Temp";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App(){
  return <>
    <DefaultHOC path="/" exact component={()=>{
      return(<> 
         <Temp Name="root" />
      </>);

    }} />
     <DefaultHOC path="/movie" exact component={()=>{
      return(<> 
         <Temp Name="movie" />
      </>);

    }} />
  </>
}

export default App;
