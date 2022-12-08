import React from "react";
import {MdErrorOutline} from "react-icons/md";

const ErrorFetch = ()=>{
    return (
        <div className="App__error">

            <h1> <MdErrorOutline className="icon-error"/>  <span>Solo debes ingresar números desde 1 al 126</span> </h1>
        </div>
        
    )
}

export default ErrorFetch