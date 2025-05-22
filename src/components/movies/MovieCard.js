import { useState, useEffect, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faClock } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import "./movies.css";
import Tag from "./Tag";
import unaivableImage from "../../assets/unavailable-movie-image.png";

function MovieCard({ movie }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isWatchLater, setIsWatchLater] = useState(false);

  const accessToken = JSON.parse(localStorage.getItem("accessToken"));

  function handleClick(type) {
    console.log("the icon is clicked. The type is:", type);

    if (type === "favorite") {
      console.log("isFavorite before request", isFavorite);
      if (isFavorite) {
        axios
          .delete(`http://localhost:8000/api/titles/${type}/${movie.imdbId}/`, {
            headers: { Authorization: `Bearer ${accessToken}` },
          })
          .then((response) => {
            if (response.status === 200) {
              setIsFavorite(false);
              console.log("isFavorite delete request", isFavorite);
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
              console.log("isFavorite post request", isFavorite);
            }
          })
          .catch((error) => console.error(error));
      }
    }
    if (type === "watchlater") {
      if (isWatchLater) {
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

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:8000/api/titles/favorite/", {
  //       headers: { Authorization: `Bearer ${accessToken}` },
  //     })
  //     .then((response) => {
  //       if (response.status === 200) {
  //         const movies = response.data;
  //         if (movies.find((m) => m.imdbId === movie.imdbId)) {
  //           setIsFavorite(true);
  //           console.log("isFavorite", isFavorite);
  //         }
  //       }
  //     })
  //     .catch((error) => console.error(error));

  //   axios
  //     .get("http://localhost:8000/api/titles/watchlater/", {
  //       headers: { Authorization: `Bearer ${accessToken}` },
  //     })
  //     .then((response) => {
  //       if (response.status === 200) {
  //         const movies = response.data;
  //         if (movies.find((m) => m.imdbId === movie.imdbId)) {
  //           setIsWatchLater(true);
  //           console.log("isWatchLater", isWatchLater);
  //         }
  //       }
  //     })
  //     .catch((error) => console.error(error));
  // }, []);

  const fetchFavorites = useCallback(async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/titles/favorite/",
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );
      if (response.status === 200) {
        const isMovieFavorite = response.data.some(
          (m) => m.imdbId === movie.imdbId
        );
        setIsFavorite(isMovieFavorite);
      }
    } catch (error) {
      console.error(error);
    }
  }, [movie.imdbId, accessToken]);

  const fetchWatchLater = useCallback(async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/titles/watchlater/",
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );
      if (response.status === 200) {
        const isMovieWatchLater = response.data.some(
          (m) => m.imdbId === movie.imdbId
        );
        setIsWatchLater(isMovieWatchLater);
      }
    } catch (error) {
      console.error(error);
    }
  }, [movie.imdbId, accessToken]);

  useEffect(() => {
    fetchFavorites();
    fetchWatchLater();
  }, [fetchFavorites, fetchWatchLater]);

  return (
    <div className="movie-card-container">
      <div
        className="movie-card-image-title"
        style={{
          backgroundImage: `url(${movie.imageurls[0] || unaivableImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="movie-card-icons">
          <FontAwesomeIcon
            icon={faClock}
            onClick={() => handleClick("watchlater")}
            style={{ color: isWatchLater ? "#e31c25" : "white" }}
          />
          <FontAwesomeIcon
            icon={faStar}
            onClick={() => handleClick("favorite")}
            style={{ color: isFavorite ? "#e31c25" : "white" }}
          />
        </div>
        <p className="movie-card-title">{movie.title}</p>
      </div>
      <div className="movie-card-tag-genres">
        <p>{movie.synopsis}</p>
        <div className="movie-card-tag">
          {movie.genres.map((genre) => (
            <Tag genre={genre} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
