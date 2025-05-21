import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faClock } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import "./movies.css";
import Tag from "./Tag";

function MovieCard({ movie }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isWatchLater, setIsWatchLater] = useState(false);

  const accessToken = JSON.parse(localStorage.getItem("accessToken"));

  function handleClick(type) {
    if (type === "favorite") {
      if (isFavorite) {
        axios
          .delete(`http://localhost:8000/api/titles/${type}/${movie.imdbId}/`, {
            headers: { Authorization: `Bearer ${accessToken}` },
          })
          .then((response) => {
            if (response.status === 200) {
              setIsFavorite(false);
            }
          })
          .catch((error) => console.error(error));
      } else {
        axios
          .post(
            `http://localhost:8000/api/titles/${type}/${movie.imdbId}/`,
            {},
            {
              headers: { Authorization: `Bearer ${accessToken}` },
            }
          )
          .then((response) => {
            if (response.status === 200) {
              setIsFavorite(true);
            }
          })
          .catch((error) => console.error(error));
      }
    }
    if (type === "watchlater") {
      if (isFavorite) {
        axios
          .delete(`http://localhost:8000/api/titles/${type}/${movie.imdbId}/`, {
            headers: { Authorization: `Bearer ${accessToken}` },
          })
          .then((response) => {
            if (response.status === 200) {
              setIsWatchLater(false);
            }
          })
          .catch((error) => console.error(error));
      } else {
        axios
          .post(
            `http://localhost:8000/api/titles/${type}/${movie.imdbId}/`,
            {},
            {
              headers: { Authorization: `Bearer ${accessToken}` },
            }
          )
          .then((response) => {
            if (response.status === 200) {
              setIsWatchLater(true);
            }
          })
          .catch((error) => console.error(error));
      }
    }
  }

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/titles/favorite/", {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then((response) => {
        if (response.status === 200) {
          const movies = response.data;
          if (movies.find((m) => m.imdbId === movie.imdbId)) {
            setIsFavorite(true);
          }
        }
      })
      .catch((error) => console.error(error));

    axios
      .get("http://localhost:8000/api/titles/watchlater/", {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then((response) => {
        if (response.status === 200) {
          const movies = response.data;
          if (movies.find((m) => m.imdbId === movie.imdbId)) {
            setIsWatchLater(true);
          }
        }
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <div style={{ backgroundImage: `url(${movie.image})` }}>
        <div>
          <FontAwesomeIcon icon={faClock} onClick={handleClick("watchlater")} />
          <FontAwesomeIcon icon={faStar} onClick={handleClick("favorite")} />
        </div>
        <p>{movie.title}</p>
      </div>
      <div>
        <p>{movie.synopsis}</p>
        {movie.genres.map((genre) => (
          <Tag genre={genre} />
        ))}
      </div>
    </div>
  );
}

export default MovieCard;
