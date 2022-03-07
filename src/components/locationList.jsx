import React, { useState } from 'react'
import Locations from './locations'
import LocationForm from './locationForm';
import useForecast from './hooks/useForecast';


import axios from 'axios';

const LocationList = (props) => {
    const { forecast, submitRequest } = useForecast();
    let data = JSON.parse(sessionStorage.getItem('locationList')); 
    const [locationCards, setLocationCards] = useState(data ? data : []);
    const addLocations = async location => {

        //Check if there is 10 locations 
        if (locationCards.length < 10) {
            const data = await axios(`https://api.openweathermap.org/data/2.5/weather?q=${location.location}&appid=2c3d5d3913ae374842bd32576a795dd2`);
            let newCity = { "location": location.location, "data": data.data };
            const update = [newCity, ...locationCards]
            setLocationCards(update)
            sessionStorage.setItem('locationList', JSON.stringify(update));
        } else {
            alert("You can not add more locations. Maximum is 10.")
        }


    }

    const removeElement = (elementName) => {

        console.log("removeee")
        const withoutRemoved = [...locationCards].filter(element => element.location !== elementName)
        setLocationCards(withoutRemoved);
        sessionStorage.setItem('locationList', JSON.stringify(withoutRemoved));

    }


    return (
        <div>
            <h3>Select locations to see weather</h3>
            <button>FAVOUTIRE</button>
            <br/>
            <LocationForm onSubmit={addLocations} />
            <Locations locations={locationCards.length > 0 ?
                locationCards :
                JSON.parse(sessionStorage.getItem('locationList'))}
                removeElement={removeElement} />
        </div>

    )
}

export default LocationList; 