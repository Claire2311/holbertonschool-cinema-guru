import { useState } from "react";
import axios from "axios";
import "./auth.css";
import Button from "../../components/general/Button";
import Login from "./Login";
import Register from "./Register";

function Authentication({ setIsLoggedIn, setUserUsername }) {
  const [_switch, setSwitch] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(onSubmit) {
    onSubmit.preventDefault();

    if (_switch === true) {
      axios
        .post("http://localhost:8000/api/auth/login", {
          username: username,
          password: password,
        })
        .then((response) => {
          if (response.status === 200) {
            localStorage.setItem(
              "accessToken",
              JSON.stringify(response.data.accessToken)
            );
            setIsLoggedIn(true);
            setUserUsername(username);
          }
        })
        .catch((error) => console.error(error));
    } else if (_switch === false) {
      axios
        .post("http://localhost:8000/api/auth/register", {
          username: username,
          password: password,
        })
        .then((response) => {
          if (response.status === 200) {
            localStorage.setItem(
              "accessToken",
              JSON.stringify(response.data.accessToken)
            );
            setIsLoggedIn(true);
            setUserUsername(username);
          }
        })
        .catch((error) => console.error(error));
    }
  }

  return (
    <div className="auth-component">
      <div className="auth-header">
        <Button
          label="Sign In"
          className="sign-in-button"
          onClick={() => {
            setSwitch(true);
          }}
          type="button"
        />
        <Button
          label="Sign Up"
          className="sign-up-button"
          onClick={() => {
            setSwitch(false);
          }}
          type="button"
        />
      </div>
      <form onSubmit={handleSubmit}>
        <div className="auth-content">
          {_switch ? (
            <Login
              username={username}
              password={password}
              setUsername={setUsername}
              setPassword={setPassword}
            />
          ) : (
            <Register
              username={username}
              password={password}
              setUsername={setUsername}
              setPassword={setPassword}
            />
          )}
        </div>
      </form>
    </div>
  );
}

export default Authentication;
