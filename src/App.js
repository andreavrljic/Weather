import './App.css';
import Weather from './components/weather';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
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
