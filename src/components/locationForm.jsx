import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faSearch } from '@fortawesome/free-solid-svg-icons';

const LocationForm = (props) => {

    const [input, setInput] = useState(""); 


    const handleOnChange = e => {
        setInput(e.target.value); 
    }
    const handleSubmit = async e => {
        e.preventDefault(); 
        
        props.onSubmit(
            {location:input}
        )
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