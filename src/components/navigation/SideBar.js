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
import { set } from "lodash";
import Activity from "../Activity";

function SideBar() {
  const [selected, setSelected] = useState("home");
  const [small, setSmall] = useState(true);
  //   const [activities, setActivities] = useState([]);
  const [showActivities, setShowActivities] = useState(false);
  const [loading, setLoading] = useState(true);
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
          //   setActivities(response.data);
        }
        console.log("🚨 response", response);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  const activities = [
    {
      TitleId: 2,
      activityType: "favorite",
      createdAt: "2022-04-13T15:53:26.751Z",
      id: 77,
      title: { title: "GodHead: In a fiction, in a dream of passion" },
      updatedAt: "2022-04-13T15:53:26.751Z",
      user: { username: "Atef" },
      userId: 1,
    },
    {
      TitleId: 1,
      activityType: "favorite",
      createdAt: "2023-06-26T14:01:33.751Z",
      id: 78,
      title: { title: "Harry Potter" },
      updatedAt: "2023-06-26T14:01:33.751Z",
      user: { username: "Moi" },
      userId: 2,
    },
    {
      TitleId: 5,
      activityType: "comment",
      createdAt: "2023-09-15T09:23:12.458Z",
      id: 79,
      title: { title: "The Great Gatsby" },
      updatedAt: "2023-09-15T09:23:12.458Z",
      user: { username: "Sophie" },
      userId: 3,
    },
    {
      TitleId: 8,
      activityType: "share",
      createdAt: "2024-01-05T18:45:22.214Z",
      id: 80,
      title: { title: "1984" },
      updatedAt: "2024-01-05T18:45:22.214Z",
      user: { username: "Marco" },
      userId: 4,
    },
    {
      TitleId: 3,
      activityType: "favorite",
      createdAt: "2023-11-12T12:15:36.552Z",
      id: 81,
      title: { title: "To Kill a Mockingbird" },
      updatedAt: "2023-11-12T12:15:36.552Z",
      user: { username: "Elena" },
      userId: 5,
    },
    {
      TitleId: 9,
      activityType: "comment",
      createdAt: "2024-02-28T20:37:14.821Z",
      id: 82,
      title: { title: "The Lord of the Rings" },
      updatedAt: "2024-02-28T20:37:14.821Z",
      user: { username: "Alex" },
      userId: 6,
    },
    {
      TitleId: 12,
      activityType: "share",
      createdAt: "2022-08-17T10:42:59.123Z",
      id: 83,
      title: { title: "Pride and Prejudice" },
      updatedAt: "2022-08-17T10:42:59.123Z",
      user: { username: "Julia" },
      userId: 7,
    },
    {
      TitleId: 7,
      activityType: "favorite",
      createdAt: "2024-04-02T15:19:48.369Z",
      id: 84,
      title: { title: "The Hobbit" },
      updatedAt: "2024-04-02T15:19:48.369Z",
      user: { username: "Thomas" },
      userId: 8,
    },
    {
      TitleId: 4,
      activityType: "comment",
      createdAt: "2023-03-21T08:56:37.742Z",
      id: 85,
      title: { title: "The Catcher in the Rye" },
      updatedAt: "2023-03-21T08:56:37.742Z",
      user: { username: "Lena" },
      userId: 9,
    },
    {
      TitleId: 10,
      activityType: "share",
      createdAt: "2022-12-05T22:34:11.297Z",
      id: 86,
      title: { title: "Brave New World" },
      updatedAt: "2022-12-05T22:34:11.297Z",
      user: { username: "David" },
      userId: 10,
    },
    {
      TitleId: 6,
      activityType: "favorite",
      createdAt: "2024-03-18T11:27:52.631Z",
      id: 87,
      title: { title: "The Alchemist" },
      updatedAt: "2024-03-18T11:27:52.631Z",
      user: { username: "Sara" },
      userId: 11,
    },
    {
      TitleId: 11,
      activityType: "comment",
      createdAt: "2023-07-29T16:58:23.486Z",
      id: 88,
      title: { title: "Animal Farm" },
      updatedAt: "2023-07-29T16:58:23.486Z",
      user: { username: "Luis" },
      userId: 12,
    },
  ];

  return (
    <nav>
      {" "}
      {loading ? (
        <div className="loading">
          <p>Loading...</p>
        </div>
      ) : (
        <div className="sidebar">
          <div className="menu-sidebar">
            <ul>
              <li className="menu-item" onClick={() => setPage("Home")}>
                <FontAwesomeIcon icon={faFolder} /> Home{" "}
                <span className="arrow-menu-sidebar">
                  <FontAwesomeIcon icon={faArrowRight} />
                </span>
              </li>
              <li className="menu-item" onClick={() => setPage("Favorites")}>
                <FontAwesomeIcon icon={faStar} /> Favorites
              </li>
              <li className="menu-item" onClick={() => setPage("Watch Later")}>
                <FontAwesomeIcon icon={faClock} /> Watch Later
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
