import React, { useState } from 'react'
import Locations from './locations'
import LocationForm from './locationForm';
import useForecast from './hooks/useForecast';
import { useHistory } from 'react-router-dom';

const FavoutireList = (props) => {

    let history = useHistory(); 

    let data = JSON.parse(sessionStorage.getItem('favouriteList')); 

    const [locationCards, setLocationCards] = useState(data ? data : []);


    const removeFavourite = (elementName) => {

        console.log("removeee")
        const withoutRemoved = [...locationCards].filter(element => element.location !== elementName)
        setLocationCards(withoutRemoved);
        console.log(locationCards)
        sessionStorage.setItem('favouriteList', JSON.stringify(withoutRemoved));

    }


    return (
        <div>
            {console.log(data)}
            <h3>YOUR FAVOURITE LIST</h3>
            <button className="buttonBack" onClick={()=> history.goBack()}>BACK</button>
            <Locations locations={locationCards.length > 0 ?
                locationCards :
                JSON.parse(sessionStorage.getItem('favouriteList'))}
                removeFavourite={removeFavourite} 
                favourite={true}
                />
        </div>

    )
}

export default FavoutireList; 