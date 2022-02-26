// import React from 'react'; 
// import Card from 'react-bootstrap/Card'
// import Carousel from 'react-elastic-carousel'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCloud, faBolt, faCloudRain, faCloudShowersHeavy , faSnowflake, faSmog} from '@fortawesome/free-solid-svg-icons';

// const ForecastTown = (props) => {

//     let weatherIcon = null; 
//     let data = props.forecast;
     
//     if(data && typeof data.main != "undefined"){
//         if(data.weather[0].main =="Clouds"){
//             weatherIcon = faCloud; 
//         }else if(data.weather[0].main =="Thunderstorm"){
//             weatherIcon = faBolt; 
//         }else if(data.weather[0].main =="Drizzle"){
//             weatherIcon = faCloudRain; 
//         }else if(data.weather[0].main =="Rain"){
//             weatherIcon = faCloudShowersHeavy; 
//         }else if(data.weather[0].main =="Snow"){
//             weatherIcon = faSnowflake; 
//         }else weatherIcon = faSmog
    
//     }else{
//         return (<div>Loading...</div>)
//     }

//     let temp = (data.main.temp-273.15).toFixed(2); 
//     let temp_min = (data.main.temp_min -273.15).toFixed(2); 
//     let temp_max = (data.main.temp_max -273.15).toFixed(2); 


//     return (
//     <div>
//         <Carousel>
//                 <div className ="container">
//                     <Card className=" text-white">
//                         <Card.Img 
//                         src="https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?ixlib=rb-1.2.1/100px270" 
//                         alt="Card image" 
//                         height={"600px"}
//                         width={"1000px"}/>
//                         <Card.ImgOverlay>
                            
//                         <div className='bg-dark bg-opacity-50 py-3'>
//                             <Card.Title>{data.name}</Card.Title>
//                             <Card.Text>
//                                 Monday, 14. January 2022.
//                             </Card.Text>
//                             <hr/>
//                             <FontAwesomeIcon icon={weatherIcon} />
//                             <h1>{temp}&deg;C</h1>
//                             <p className='lead'>{data.weather[0].main}</p>
//                             <p className='lead'>{temp_min} &deg;C |{temp_max} &deg;C</p>
//                         </div>
                            
//                         </Card.ImgOverlay>
//                         </Card>
                        
                  
//                 </div>    
//         </Carousel>
//          {/* <div className ="container">
//                 <div className="row justify-content-center">
//                     <div className="col-md-12">
//                     <Card className=" text-white">
//                         <Card.Img 
//                         src="https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?ixlib=rb-1.2.1/100px270" 
//                         alt="Card image" 
//                         height={"600px"}
//                         width={"900px"}/>
//                         <Card.ImgOverlay>
                            
//                         <div className='bg-dark bg-opacity-50 py-3'>
//                             <Card.Title>{data.name}</Card.Title>
//                             <Card.Text>
//                                 Monday, 14. January 2022.
//                             </Card.Text>
//                             <hr/>
//                             <FontAwesomeIcon icon={weatherIcon} />
//                             <h1>{temp}&deg;C</h1>
//                             <p className='lead'>{data.weather[0].main}</p>
//                             <p className='lead'>{temp_min} &deg;C |{temp_max} &deg;C</p>
//                         </div>
                            
//                         </Card.ImgOverlay>
//                         </Card>
//                         </div>
//                     </div>
//                 </div>  */}
//         {/* {
//             props.data ? 
//             props.data.list.map(element => {
//                 <div className ="container">
//                 <div className="row justify-content-center">
//                     <div className="col-md-12">
//                     <Card className=" text-white">
//                         <Card.Img 
//                         src="https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?ixlib=rb-1.2.1/100px270" 
//                         alt="Card image" 
//                         height={"600px"}
//                         width={"900px"}/>
//                         <Card.ImgOverlay>
                            
//                         <div className='bg-dark bg-opacity-50 py-3'>
//                             <Card.Title>{element.name}</Card.Title>
//                             <Card.Text>
//                                 Monday, 14. January 2022.
//                             </Card.Text>
//                             <hr/>
//                             <FontAwesomeIcon icon={weatherIcon} />
//                             <h1>{temp}&deg;C</h1>
//                             <p className='lead'>{element.weather[0].main}</p>
//                             <p className='lead'>{temp_min} &deg;C |{temp_max} &deg;C</p>
//                         </div>
                            
//                         </Card.ImgOverlay>
//                         </Card>
//                         </div>
//                     </div>
//                 </div>
//             }) : 

//             <div className ="container">
//                 <div className="row justify-content-center">
//                     <div className="col-md-12">
//                     <Card className=" text-white">
//                         <Card.Img 
//                         src="https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?ixlib=rb-1.2.1/100px270" 
//                         alt="Card image" 
//                         height={"600px"}
//                         width={"900px"}/>
//                         <Card.ImgOverlay>
                            
//                         <div className='bg-dark bg-opacity-50 py-3'>
//                             <Card.Title>{data.name}</Card.Title>
//                             <Card.Text>
//                                 Monday, 14. January 2022.
//                             </Card.Text>
//                             <hr/>
//                             <FontAwesomeIcon icon={weatherIcon} />
//                             <h1>{temp}&deg;C</h1>
//                             <p className='lead'>{data.weather[0].main}</p>
//                             <p className='lead'>{temp_min} &deg;C |{temp_max} &deg;C</p>
//                         </div>
                            
//                         </Card.ImgOverlay>
//                         </Card>
//                         </div>
//                     </div>
//                 </div> 
//         } */}
//     </div>)
// }

// export default ForecastTown;