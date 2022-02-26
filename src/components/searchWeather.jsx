// import React, { useState, useEffect } from 'react'; 
// import Town from './forecastTown'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {  faSearch } from '@fortawesome/free-solid-svg-icons';
// import { useLocation } from "react-router-dom";
// import useForecast from './hooks/useForecast'

// const SearchWeather = (props) =>{

//     const current = new Date(); 
//     const location = useLocation();
//     const [locationList, setLocationList] = useState([]); 
//     const [city, setCity] = useState(''); 
//     const [search, setSearch] = useState("");
//     const [data, setData] = useState([]);
//     const [input, setInput] = useState("");
//     const [weather, setWeather] = useState({});

//     const {cityList, forecast, submitRequest}= useForecast(); 

//     const breakPoints = [
//         { width: 1, itemsToShow: 1 },
//         { width: 550, itemsToShow: 2, itemsToScroll: 2 },
//         { width: 768, itemsToShow: 3 },
//         { width: 1200, itemsToShow: 4 }
//       ];

//     localStorage.setItem('token', JSON.stringify(location.state.token+`${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`))

//     const addLocation = () => {
//         const nextItem = "Split";
//         setLocationList([...locationList, nextItem]);
//       };
    
//       const removeLocation = () => {
//         const endRange = "Osijek";
//         setLocationList(locationList.slice(0, endRange));
//       };

    


//     const handleSubmit = (event) =>{
//         event.preventDefault(); 
//         //Check list if it is empty
//         if(!cityList || cityList ==='') return; 
//         // console.log("City", city); 
//         submitRequest(city); 
//         console.log("vrijed" , forecast )
//         console.log("lista" , cityList)
//         setLocationList((old) => [...old, cityList])
//     }   

//     return (
        
//         <div className="container">
//         <button onClick={removeLocation}>Remove Item</button>
//         <button onClick={addLocation}>Add Item</button>
//             <form onSubmit={handleSubmit}>
//                 <div className="input-group">
//                     <input type="search" className="form-control" 
//                     placeholder="Search City" 
//                     aria-label="Search City" 
//                     name="search"
//                     value={city}
//                     onChange={e => setCity(e.target.value)}
//                     required/>
//                     <button type="submit"onClick={handleSubmit} className="input-group-text" id="basic-addon2">
//                         <FontAwesomeIcon icon={faSearch} color="black" />    
//                     </button>
//                 </div>
//             </form>
//             <div className="carousel-wrapper">
//              <Town data={cityList} forecast = {forecast}></Town>
//             </div>
        
//         </div>   
//     )
// }

// export default SearchWeather;

// // const searchIt = event => {
//     //     if (event.key === "Enter") {
//     //       fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=2c3d5d3913ae374842bd32576a795dd2`)
//     //         .then(res => res.json())
//     //         .then(result => {
//     //           setWeather(result);
//     //           setInput('');
//     //           console.log("Andreaaaaaaaa!" , result);
//     //         });
//     //     }
//     //   }

//     // useEffect(() => {
//     //     const fetchWeather = async () => {
//     //         console.log(search , " and " , input)
//     //         const response = 
//     //         await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=2c3d5d3913ae374842bd32576a795dd2`)
//     //         // .then(res => res.json())
//     //         // .then(result => setData(result)); 
//     //         // if(componentMounted){
//     //         //     setData(await response.json()); 
//     //         //     console.log("data call" , data)
//     //         // }
//     //         // return ()=> {
//     //         //     componentMounted = false; 
//     //         // }
//     //         if(!response.ok){
//     //             const message = `${input} is not valid city name`; 
//     //             throw new Error(message); 
//     //         }
//     //         const de = await response.json(); 
//     //         await changeIt(de)
//     //         // setData(response.json());
//     //         console.log("dataaa" , data)
//     //     }
//     //     fetchWeather(); 
//     // }, [search]);