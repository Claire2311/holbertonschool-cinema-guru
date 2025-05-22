import { useState, useEffect } from "react";
import axios from "axios";

import "./dashboard.css";
import MovieCard from "../../components/movies/MovieCard";
import Filter from "../../components/movies/Filter";
import Button from "../../components/general/Button";

function HomePage() {
  const [movies, setMovies] = useState([]);
  const [minYear, setMinYear] = useState(1970);
  const [maxYear, setMaxYear] = useState(2022);
  const [genres, setGenres] = useState([]);
  const [sort, setSort] = useState("");
  const [title, setTitle] = useState("");
  const [page, setPage] = useState(1);

  function loadMovies(page) {
    const accessToken = JSON.parse(localStorage.getItem("accessToken"));
    const url = `http://localhost:8000/api/titles/advancedsearch/?page=${page}&minYear=${minYear}&maxYear=${maxYear}&sort=${sort}&genres=${genres.join(
      ","
    )}&title=${title}`;

    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        setMovies(response.data.titles);
      })
      .catch((error) => console.error(error));
  }

  useEffect(() => {
    loadMovies(page);
  }, [minYear, maxYear, sort, genres, title, page]);

  return (
    <div>
      <div>
        <Filter
          minYear={minYear}
          setMinYear={setMinYear}
          maxYear={maxYear}
          setMaxYear={setMaxYear}
          sort={sort}
          setSort={setSort}
          genres={genres}
          setGenres={setGenres}
          title={title}
          setTitle={setTitle}
        />
      </div>
      <div className="movies-container">
        {movies.map((movie) => (
          <MovieCard movie={movie} />
        ))}
      </div>
      <div className="load-more-container">
        <Button
          label="Load More..."
          className="load-more-button"
          onClick={() => {
            const nextPage = page + 1;
            setPage(nextPage);
          }}
        />
      </div>
    </div>
  );
}
export default HomePage;
