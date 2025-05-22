import "./general.css";

function SearchBar({ title, setTitle }) {
  function handleInput(onChange) {
    setTitle(onChange.target.value);
  }

  return (
    <input
      className="search-bar"
      type="text"
      value={title}
      onChange={handleInput}
    />
  );
}

export default SearchBar;
