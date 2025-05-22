import { faUser, faKey } from "@fortawesome/free-solid-svg-icons";
import "./auth.css";
import Input from "../../components/general/Input";
import Button from "../../components/general/Button";

function Login({ username, password, setUsername, setPassword }) {
  return (
    <div className="auth-container">
      <h3>Sign in with your account</h3>
      <div className="auth-inputs">
        <Input
          label="Username:"
          type="text"
          className="input-text"
          value={username}
          setValue={setUsername}
          icon={faUser}
        />
        <Input
          label="Password:"
          type="password"
          className="input-text"
          value={password}
          setValue={setPassword}
          icon={faKey}
        />
      </div>
      <div className="auth-buttons">
        <Button
          label="Sign In"
          className="button-class"
          onClick={() => {}}
          icon={faKey}
          type="submit"
        />
      </div>
    </div>
  );
}

export default Login;
