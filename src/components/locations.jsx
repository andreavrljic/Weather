import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card'
import { faCloud, faBolt, faCloudRain, faCloudShowersHeavy, faSnowflake, faSmog, faTrashCan, faHeart, faHeartBroken } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHistory } from "react-router-dom";
import Geocode from 'react-geocode';
import './locations.css'



const Locations = (props) => {

    Geocode.setApiKey('AIzaSyAWa7-RTKOR7BulmJ1PWmDaJ9r2ZB8UqAs');
    const history = useHistory();
    let listOfLocations = props.locations;
    let weatherIcon = null;
    const setTemperature = (temp) => {
        return (temp - 273.15).toFixed(1)
    }

    const findIcon = (icon) => {
        if (icon == "Clouds") {
            weatherIcon = faCloud;
        } else if (icon == "Thunderstorm") {
            weatherIcon = faBolt;
        } else if (icon == "Drizzle") {
            weatherIcon = faCloudRain;
        } else if (icon == "Rain") {
            weatherIcon = faCloudShowersHeavy;
        } else if (icon == "Snow") {
            weatherIcon = faSnowflake;
        } else weatherIcon = faSmog
        return weatherIcon;
    }


    const detailForecast = async (city) => {
        history.push({ pathname: `/weather/${city}`, state: city })
    }

    const addToFavourite = (data) => {

        if (!sessionStorage.getItem('favouriteList')) {

            sessionStorage.setItem('favouriteList', JSON.stringify([data]))
        } else {
            let currentFavourite = JSON.parse(sessionStorage.getItem('favouriteList'));

            const update = [data, ...currentFavourite];
            sessionStorage.setItem('favouriteList', JSON.stringify(update));

        }

    }


    return listOfLocations ?
        listOfLocations.map((element, index) => (
            <div key={index} className="container">
                <div className="col-md-12 mt-2">
                    <Card className="text-white" >
                        <Card.Img
                            src="https://cdn.wallpapersafari.com/66/28/dXOpWQ.jpg"
                            alt="Card image"
                            height={"250px"}
                            width={"400px"}
                            variant="top"
                        />
                        <Card.ImgOverlay>
                            <div className="cardIcons">
                                {!props.favourite ? <FontAwesomeIcon onClick={() => addToFavourite(element)} icon={faHeart} /> :
                                    <FontAwesomeIcon onClick={() => props.removeFavourite(element.location)} icon={faHeartBroken} />}
                                {!props.favourite ?
                                    <FontAwesomeIcon onClick={() => props.removeElement(element.location)} icon={faTrashCan} /> :
                                    null}
                            </div>
                            <div className='cardShadow'>
                                <Card.Title className="title" onClick={() => detailForecast(element.location)}>{element.location}</Card.Title>
                                <FontAwesomeIcon icon={findIcon(element.data.weather[0].main)} />
                                <h1>{setTemperature(element.data.main.temp)}&deg;C</h1>
                                <p className='lead'>{element.data.weather[0].main}</p>
                            </div>

                        </Card.ImgOverlay>
                    </Card>

                </div>
            </div>
        )

        ) : null

}

export default Locations; 