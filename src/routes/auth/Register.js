import { faUser, faKey, faPlus } from "@fortawesome/free-solid-svg-icons";
import "./auth.css";
import Input from "../../components/general/Input";
import Button from "../../components/general/Button";

function Register({ username, password, setUsername, setPassword }) {
  return (
    <>
      <h3>Create a new account</h3>
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
          label="Sign Up"
          className="button-class"
          onClick={() => {}}
          icon={faPlus}
        />
      </div>
    </>
  );
}

export default Register;
