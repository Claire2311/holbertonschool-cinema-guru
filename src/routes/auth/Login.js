import { faUser, faKey } from "@fortawesome/free-solid-svg-icons";
import "./auth.css";
import Input from "../../components/general/Input";
import Button from "../../components/general/Button";

function Login({ username, password, setUsername, setPassword }) {
  return (
    <>
      <h3>Sign in with your account</h3>
      <div className="auth-inputs">
        <Input
          label="Username:"
          type="text"
          className="input-text"
          value=""
          setValue={() => {}}
          icon={faUser}
        />
        <Input
          label="Password:"
          type="password"
          className="input-text"
          value=""
          setValue={() => {}}
          icon={faKey}
        />
      </div>
      <div className="auth-buttons">
        <Button
          label="Sign In"
          className="button-class"
          onClick={() => {}}
          icon={faKey}
        />
      </div>
    </>
  );
}

export default Login;
