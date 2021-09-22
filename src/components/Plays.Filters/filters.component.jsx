import React from "react";
import {FiChevronDown} from "react-icons/fi";
import { Disclosure } from "@headlessui/react";


const Filters =({filterby,tags})=> {
    
    return (

      <Disclosure>
        {({open})=>(
                <> 
                        <div>
                    <div className="flex  items-center justify-between  rounded-md bg-white p-4" style={{height: "3.5rem"}}>
                        <Disclosure.Button className="py-2 w-full">
                            <div className="flex gap-3 items-center ">
                                <FiChevronDown className={`${ open ?'transform rotate-180' : ''} font-thin text-sm`}/>
                                <h3 className={`text-sm ${open ?'text-Ashish-500':''}`}>{filterby}</h3>
                            </div>
                        </Disclosure.Button>
                        <div className="text-gray-500 font-light text-xs">Clear</div>
                    </div>
                
                    <Disclosure.Panel className="flex flex-wrap gap-2 text-gray-500 bg-white p-5 ">
                            {tags.map((tag)=>{
                            return <>
                            <button className="border-2 border-gray-300 text-Ashish-400 text-xs bg-white focus:bg-Ashish-500 px-5 focus:border-Ashish-500 focus:ring-0 focus:text-white p-2 ">{tag}</button>
                            </>
                            })}
                    </Disclosure.Panel>

                    </div>
                </>
        )}
      </Disclosure>
    )
  }
  



export default Filters;