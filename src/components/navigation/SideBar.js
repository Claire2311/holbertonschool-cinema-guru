import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFolder,
  faStar,
  faClock,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import "./navigation.css";
import Activity from "../Activity";

function SideBar() {
  const [selected, setSelected] = useState("home");
  const [small, setSmall] = useState(true);
  const [activities, setActivities] = useState([]);
  const [showActivities, setShowActivities] = useState(false);
  const navigate = useNavigate();

  function setPage(pageName) {
    setSelected(pageName);
    if (pageName === "Home") {
      navigate("/home");
    }
    if (pageName === "Favorites") {
      navigate("/favorites");
    }
    if (pageName === "Watch Later") {
      navigate("/watchlater");
    }
  }

  useEffect(() => {
    const accessToken = JSON.parse(localStorage.getItem("accessToken"));
    axios
      .get("http://localhost:8000/api/activity/", {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then((response) => {
        if (response.status === 200) {
          setActivities(response.data);
        }
        setShowActivities(true);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <nav>
      {!showActivities ? (
        <div className="loading">
          <p>Loading...</p>
        </div>
      ) : (
        <div className="sidebar">
          <div className="menu-sidebar">
            <ul>
              <li
                className={`menu-item ${selected === "Home" ? "selected" : ""}`}
                onClick={() => setPage("Home")}
              >
                <FontAwesomeIcon icon={faFolder} /> Home{" "}
                <span className="arrow-menu-sidebar">
                  <FontAwesomeIcon icon={faArrowRight} />
                </span>
              </li>
              <li
                className={`menu-item ${
                  selected === "Favorites" ? "selected" : ""
                }`}
                onClick={() => setPage("Favorites")}
              >
                <FontAwesomeIcon icon={faStar} /> Favorites{" "}
                <span className="arrow-menu-sidebar">
                  <FontAwesomeIcon icon={faArrowRight} />
                </span>
              </li>
              <li
                className={`menu-item ${
                  selected === "Watch Later" ? "selected" : ""
                }`}
                onClick={() => setPage("Watch Later")}
              >
                <FontAwesomeIcon icon={faClock} /> Watch Later{" "}
                <span className="arrow-menu-sidebar">
                  <FontAwesomeIcon icon={faArrowRight} />
                </span>
              </li>
            </ul>
          </div>
          <div className="latest-activities">
            <h2>Latest Activities</h2>
            <ul>
              {activities.slice(0, 10).map((activity) => (
                <Activity key={activity.id} activity={activity} />
              ))}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}

export default SideBar;
