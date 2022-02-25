import React from 'react'; 
import { useLocation } from "react-router-dom";

const Weather = (props) =>{

    const location = useLocation();

    console.log("weather " , props , location)
    localStorage.setItem('token', JSON.stringify(props))

    return (<div >
        Weather 
    </div>)

}

export default Weather; 