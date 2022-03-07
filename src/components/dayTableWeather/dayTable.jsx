import { useLocation, useHistory } from "react-router-dom";
import Table from 'react-bootstrap/Table'
import { WeatherIcon } from '../helpers/weatherIcon'

const DayTable = (props) => {
  let history = useHistory(); 
  const location = useLocation();
  const prepareTableData = () => {

    return (
      location.state.data.map((element, index) =>

        <tr key={index}>
          <td>{index}</td>
          <td>{element.dt_txt.split(" ")[1]}</td>
          <td><img src={WeatherIcon(element.weather[0].icon)} /></td>
          <td>{element.main.temp.toFixed(0)}</td>
        </tr>
      )

    )
  }

  return (
    <div className="table">
      <button onClick={()=>history.goBack()}>Back</button>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr><th colSpan={4}>{location.state.city}</th></tr>
          <tr>
            <th>#</th>
            <th>Hour</th>
            <th>Weather</th>
            <th>Temperature</th>
          </tr>
        </thead>
        <tbody>
          {prepareTableData()}
          <tr>
            <td>3</td>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    </div>
  )


}

export default DayTable