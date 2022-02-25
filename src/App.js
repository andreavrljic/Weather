import './App.css';
import Login from './components/login'
import Weather from './components/weather';
import FirstLogin from './components/firstLogin'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import useToken from './components/useToken';
import RegistrationForm from './components/register';


function App() {

  return (

    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Switch>
          <Route path="/weather">
            <Weather />
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
