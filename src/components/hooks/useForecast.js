import { useState } from "react";
import axios from 'axios'; 

// const URL= `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=2c3d5d3913ae374842bd32576a795dd2`; 


const useForecast = ()=>{

    const [forecast, setForecast] = useState(null);
    const [cityList, setCityList] = useState([])
    
    //function check 10 towns and return list with data

    // const addCityDataToList = (forecastData) => {

    //     setCityList((oldList)=> [...oldList, {forecastData}])

    // }

    const submitRequest =async (city) => {
        let data;
        try{
            data = await axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2c3d5d3913ae374842bd32576a795dd2`); 
            console.log("responede data", data)
        }catch (error){
            return error;
        }
        
        //If there is not data dont continoue
        if(!data || data.length ===0){
            throw new Error("There is no such location"); 
            return; 
        }
        // console.log("data inside" , data)
        // addCityDataToList(data);
        setForecast(data); 
         
    }

    return{
        // cityList,
        forecast,
        submitRequest
    };
        
    
}

export default useForecast; 