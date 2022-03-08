import React, { useState } from "react";
import usersData from '../users.json'
import { useHistory } from "react-router-dom";
import '../App.css';


const Registration = (props) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEnable, setEnable] = useState(true);
  const [token, setToken] = useState("");
  const history = useHistory();

  const passwordValidation = () => {
    var validationCondition = /(?=.*\d)(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/;
    return validationCondition.test(password);
  }

  const handleInput = () => {
    if (passwordValidation()) {
      setEnable(false)
    }
    else {
      setEnable(true);
    };
  };


  const handleSubmit = (email, password) => {
    let userExist = usersData.some(item => {
      return item.email == email && item.password == password
    })

    if (!userExist) {
      alert("User does not exist!");
    } else {
      history.push({ pathname: "/weather", state: { token: email } })
    }

  }

  const handleRegistration = (email, password) => {



  }


  return (
    <div className="login-wrapper">
      <div className="login-box">
        <label>Email</label>
        <input
          type="text"
          id="email-input"
          placeholder="email"
          value={email}
          onKeyUp={handleInput}
          onChange={(event) => { setEmail(event.target.value); setToken(event.target.value) }}
        />
        <label>Password</label>
        <input
          type="password"
          id="password-input"
          placeholder="Password"
          onKeyUp={handleInput}
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        {/* <button
        type="submit"
        id="button-input"
        disabled={isEnable}
        onClick={() => handleRegistration(email, password)}
      >
        Register
      </button> */}
        <button
          className="button"
          type="submit"
          id="button-input"
          disabled={isEnable}
          onClick={() => handleSubmit(email, password)}
        >
          Login
        </button>
      </div>

    </div>
  );
};

export default Registration;  