import { useState } from "react";
import "./auth.css";
import Button from "../../components/general/Button";
import Login from "./Login";
import Register from "./Register";

function Authentication({ setIsLoggedIn, setUserUsername }) {
  const [_switch, setSwitch] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="auth-component">
      <form>
        <div className="auth-header">
          <Button
            label="Sign In"
            className="sign-in-button"
            onClick={() => {
              setSwitch(true);
            }}
          />
          <Button
            label="Sign Up"
            className="sign-up-button"
            onClick={() => {
              setSwitch(false);
            }}
          />
        </div>
        <div className="auth-content">
          {_switch ? (
            <Login
              username={username}
              password={password}
              setUsername={setUserUsername}
              setPassword={setPassword}
            />
          ) : (
            <Register
              username={username}
              password={password}
              setUsername={setUserUsername}
              setPassword={setPassword}
            />
          )}
        </div>
      </form>
    </div>
  );
}

export default Authentication;
