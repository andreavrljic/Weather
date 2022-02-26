import React, {useState} from 'react'; 
import Card from 'react-bootstrap/Card'
import { faCloud, faBolt, faCloudRain, faCloudShowersHeavy , faSnowflake, faSmog, faTrashCan} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Locations = (props)=>{
    
    let listOfLocations = props.locations;
   
    let weatherIcon = null; 
    const setTemperature =(temp)=>{
        return (temp-273.15).toFixed(1)
    }
    
    const findIcon = (icon) => {
            if(icon =="Clouds"){
                weatherIcon = faCloud; 
            }else if(icon =="Thunderstorm"){
                weatherIcon = faBolt; 
            }else if(icon =="Drizzle"){
                weatherIcon = faCloudRain; 
            }else if(icon =="Rain"){
                weatherIcon = faCloudShowersHeavy; 
            }else if(icon =="Snow"){
                weatherIcon = faSnowflake; 
            }else weatherIcon = faSmog
        return weatherIcon; 
    }

    



    return listOfLocations.map((element, index) => (
        <div key = {index} className ="container">
                {/* <div className="row justify-content-center"> */}
                    <div className="col-md-12 mt-2">
                    <FontAwesomeIcon onClick ={() => props.removeElement(element.location)} icon={faTrashCan} />
                    <Card className="text-white ">
                        <Card.Img 
                        src="https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?ixlib=rb-1.2.1/100px270" 
                        alt="Card image" 
                        height={"200px"}
                        width={"900px"}/>
                        <Card.ImgOverlay>
                        <div className='bg-dark bg-opacity-50 py-1 px-1 mx-1 my-1'>
                            <Card.Title>{element.location}</Card.Title>
                            <FontAwesomeIcon icon={findIcon(element.data.weather[0].main)} />
                            <h1>{setTemperature(element.data.main.temp)}&deg;C</h1>
                            <p className='lead'>{element.data.weather[0].main}</p>
                        </div>
                            
                        </Card.ImgOverlay>
                        </Card>
                        {/* </div> */}
                    </div>
                </div>  
        )
        
    )
    
}

export default Locations; 