import { useState } from "react";
import "./movies.css";

function Tag({ genre, filter, genres, setGenres }) {
  const [selected, setSelected] = useState(false);

  function handleTag() {
    if (selected) {
      setGenres(genres.filter((g) => g !== genre));
      setSelected(false);
    } else {
      setGenres([...genres, genre]);
      setSelected(true);
    }
  }
  return (
    <li
      className={`tag${selected ? "-selected" : ""}`}
      onClick={handleTag}
      filter={filter}
    >
      {genre}
    </li>
  );
}
export default Tag;
