import React from "react";
import { Route } from "react-router";

//component
import PlaysLayout from "../layouts/plays.layout";



const PlaysHOC = ({component:Component,...rest}) =>{
   return <>
         <Route {...rest} component={(props)=>{
        return (
            <>
                <PlaysLayout >
                    <Component {...props} />
                </PlaysLayout>
            </>
        );
    }} />
   </>
};

export default PlaysHOC;