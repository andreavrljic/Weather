import Geocode from 'react-geocode';
import axios from 'axios'; 
const weatherKey = `2c3d5d3913ae374842bd32576a795dd2`;
Geocode.setApiKey('AIzaSyAWa7-RTKOR7BulmJ1PWmDaJ9r2ZB8UqAs');


export async function getFiveDaysForecast(lat, lng) {
    
    const data = await axios(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&units=metric&exclude=minutely&appid=${weatherKey}`); 
    return data; 
}

export async function getOneDayHoursForecast(city, date) {
    const data = await axios(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${weatherKey}`); 

    const dayData = data.data.list.filter((element) => 
            new Date(element.dt_txt).toDateString() == date
        ).map(ele => ele)
    console.log(dayData)


    return dayData; 
}
// export const setTemperature =(temp)=>{
//     return (temp-273.15).toFixed(1)
// }
