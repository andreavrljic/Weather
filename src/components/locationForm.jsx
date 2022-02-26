import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faSearch } from '@fortawesome/free-solid-svg-icons';
import useForecast from './hooks/useForecast';

const LocationForm = (props) => {

    console.log(props)
    const [input, setInput] = useState(""); 
    const {forecast, submitRequest}= useForecast(); 

    const handleOnChange = e => {
        setInput(e.target.value); 
    }
    const handleSubmit = async e => {
        e.preventDefault(); 
        // const rez = await 
        props.onSubmit(
            // id:Math.floor(Math.random()*10000),
            {location:input}
        )
    
        // submitRequest(input)
        // console.log("ffffffffffff" , forecast)
        setInput('')
    }

    return(
        <form className="container" onSubmit={handleSubmit}>
            <input
            placeholder='Location'
            type='text'
            value = {input}
            onChange={handleOnChange}
            />
            <button type="submit">
            <FontAwesomeIcon icon={faSearch} color="black" />    
            </button>

        </form>
    )
}

export default LocationForm; 