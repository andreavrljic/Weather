import React, {useState} from 'react'
import Locations from './locations'
import LocationForm from './locationForm';
import useForecast from './hooks/useForecast';


import axios from 'axios'; 

const LocationList = (props) => {
    const {forecast, submitRequest}= useForecast(); 
    const [locations, setLocations] = useState([]); 

    
    const addLocations = async location => {

        //Check if there is 10 locations 
        if(locations.length < 9){
            const data = await axios(`https://api.openweathermap.org/data/2.5/weather?q=${location.location}&appid=2c3d5d3913ae374842bd32576a795dd2`); 
            let newCity = {"location":location.location,"data":data.data}; 
            const update =[newCity, ...locations]
            setLocations(update)
        }else{
            alert("You can not add more locations. Maximum is 10.")
        }
        
    
    }

    const removeElement = (elementName) => {

        const removeEl = [...locations].filter(element =>element.location !==elementName)
        setLocations(removeEl);
    }    


    return(
        <div>
            <h3>Select locations to see weather</h3>
            <LocationForm onSubmit={addLocations}/>
            <Locations locations={locations} removeElement={removeElement}/>
        </div>

    )
}

export default LocationList; 