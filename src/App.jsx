import { Route } from "react-router";

//HOC
import DefaultHOC from "./HOC/default.HOC";

//component
import Temp from "./components/Temp";

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
