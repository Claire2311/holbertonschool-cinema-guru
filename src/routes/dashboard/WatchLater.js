import { useState, useEffect } from "react";
import axios from "axios";

import MovieCard from "../../components/movies/MovieCard";

import "./dashboard.css";

function WatchLater() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const accessToken = JSON.parse(localStorage.getItem("accessToken"));
    const url = `http://localhost:8000/api/titles/watchlater/`;

    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          setMovies(response.data);
        }
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1 className="page-title-h1">MOVIES TO WATCH LATER</h1>
      <div className="movies-container">
        {movies.map((movie) => (
          <MovieCard movie={movie} />
        ))}
      </div>
    </div>
  );
}
export default WatchLater;
