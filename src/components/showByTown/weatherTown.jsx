import { useLocation, useHistory } from "react-router-dom";
import FiveDayBox from './fiveDayBox';
import './weatherTown.css'
import Geocode from 'react-geocode';
import {useState,useEffect} from 'react'
import * as functions from '../helpers/getWeatherData'
    

const WeatherTown = (props)=> {

    Geocode.setApiKey('AIzaSyAWa7-RTKOR7BulmJ1PWmDaJ9r2ZB8UqAs');
    const location = useLocation();
    let history= useHistory()
    const [fiveDaysData, setFiveDaysData] = useState([]);  
    

    useEffect(() => { 
        const respo = Geocode.fromAddress(location.state); 
        respo.then(async (res) => {
            const data = await functions.getFiveDaysForecast(res.results[0].geometry.location.lat, res.results[0].geometry.location.lng);
            setFiveDaysData(data.data.daily.slice(0,6)); 
        })

    }, [])
    

    const getDayProps = (element) => {
    
        var dayDate = (new Date(element.dt*1000) ).toDateString(); 
        var dayName= dayDate.split(" ")[0]
        return {
            date: dayDate,
            day: dayName,
            weather: element.weather[0].main, 
            minTemp: element.temp.min, 
            maxTemp: element.temp.max, 
            icon: element.weather[0].icon, 
        }
        

    }
    
    return(
        
        <div className="wrapper" onClick={()=>{}}>
            <h1>{location.state}</h1>
            <button onClick={()=> history.goBack()}>Back</button>
           <div className='container'>
               
               {
                 fiveDaysData.map((element, index) => {
                   return  <FiveDayBox key={index} city={location.state} boxData ={getDayProps(element)}/>  
                 })
                }
            </div> 
        </div>
    )

}
export default WeatherTown; 