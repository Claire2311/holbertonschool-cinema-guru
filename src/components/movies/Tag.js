import { useState } from "react";
import "./movies.css";

function Tag({ genre, filter, genres, setGenres }) {
  const [selected, setSelected] = useState(false);

  function handleTag() {
    if (selected) {
      setGenres("");
      setSelected(false);
    } else {
      setGenres(...genres, genre);
      setSelected(true);
    }
  }
  return (
    <li className="tag" onClick={handleTag} filter={filter}>
      {genre}
    </li>
  );
}
export default Tag;
