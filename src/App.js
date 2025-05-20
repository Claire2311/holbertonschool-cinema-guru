import { useState, useEffect } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas, faKey } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import "./App.css";
import Dashboard from "./routes/dashboard/Dashboard";
import Authentification from "./routes/auth/Authentication";
import Login from "./routes/auth/Login";
import Authentication from "./routes/auth/Authentication";
import Header from "./components/navigation/Header";

library.add(fas, faKey);

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userUsername, setUserUsername] = useState("");

  useEffect(() => {
    const accessToken = JSON.parse(localStorage.getItem("accessToken"));

    axios
      .post(
        "http://localhost:8000/api/auth/",
        {}, // Empty request body
        { headers: { Authorization: `Bearer ${accessToken}` } }
      )
      .then((response) => {
        if (response.status === 200) {
          setIsLoggedIn(true);
          setUserUsername(response.data.username);
        }
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="App">
      {isLoggedIn ? <Dashboard /> : <Authentification />}
      {/* <Authentication /> */}
    </div>
  );
}

export default App;
