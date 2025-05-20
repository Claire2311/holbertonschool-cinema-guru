import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Dashboard from "./routes/dashboard/Dashboard";
import Authentification from "./routes/auth/Authentication";

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
  }, [isLoggedIn]);

  return (
    <div className="App">
      {isLoggedIn ? (
        <Dashboard userUsername={userUsername} setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <Authentification
          setIsLoggedIn={setIsLoggedIn}
          setUserUsername={setUserUsername}
        />
      )}
    </div>
  );
}

export default App;
