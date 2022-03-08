import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import RegistrationForm from './components/register';
import LocationList from './components/locationList'
import WeatherTown from './components/showByTown/weatherTown';
import DayTable from './components/dayTableWeather/dayTable'
import FavouriteList from './components/favouriteList'
import { useHistory } from 'react-router-dom';

const api = {
  key: "2c3d5d3913ae374842bd32576a795dd2",
  base: "https://api.openweathermap.org/data/2.5"
}

function App() {

  return (

    <div className="login-wrapper">
      <div className="header">
        <h1 className="mainTitle">Weather</h1>
      </div>

      <BrowserRouter>
        <Switch>
          <Route path="/weather/:imegrada/day">
            <DayTable />
          </Route>
          <Route path="/weather/favourites">
            <FavouriteList />
          </Route>
          <Route path="/weather/:imegrada">
            <WeatherTown />
          </Route>
          <Route path="/weather">
            <LocationList />
          </Route>

          <Route path="/">
            <RegistrationForm />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
