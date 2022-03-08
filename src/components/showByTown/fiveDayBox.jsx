import { WeatherIcon } from '../helpers/weatherIcon'
import * as func from '../helpers/getWeatherData'
import { useHistory } from "react-router-dom";
import './fiveDaysBox.css'

const FiveDayBox = (props) => {

    const history = useHistory();

    const detailForecast = async (city) => {
        const data = await func.getOneDayHoursForecast(props.city, props.boxData.date)
        history.push({ pathname: `/weather/${city}/day`, state: { city: city, data: data } })
    }

    return (
        <div className="day-weather-box" onClick={() => { detailForecast(props.city) }}>
            <div className="day">{props.boxData.day}</div>
            <div className="day-weather-image">{props.boxData.weather}</div>
            <div className="day-lowhigh-temp">
                {props.boxData.minTemp.toFixed(0)}&deg; {props.boxData.maxTemp.toFixed(0)}&deg;</div>
            <img src={WeatherIcon(props.boxData.icon)} />
        </div>
    )
}

export default FiveDayBox