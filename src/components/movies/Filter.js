import "./movies.css";
import SearchBar from "../general/SearchBar";
import Input from "../general/Input";
import SelectInput from "../general/SelectInput";
import Tag from "./Tag";

function Filter({
  minYear,
  setMinYear,
  maxYear,
  setMaxYear,
  sort,
  setSort,
  genres,
  setGenres,
  title,
  setTitle,
}) {
  const tags = [
    "Action",
    "Drama",
    "Comedy",
    "Biography",
    "Romance",
    "Thriller",
    "War",
    "History",
    "Sport",
    "Sci-fi",
    "Documentary",
    "Crime",
    "Fantasy",
  ];
  return (
    <div className="filter-container">
      <div className="filter-seachbar-dates-sort">
        <div className="filter-searchbar">
          <SearchBar title={title} setTitle={setTitle} />
        </div>
        <div className="filter-dates-sort">
          <Input
            label="Min Date:"
            type="number"
            className="filter-input"
            value={minYear}
            setValue={setMinYear}
          />
          <Input
            label="Max Date:"
            type="number"
            className="filter-input"
            value={maxYear}
            setValue={setMaxYear}
          />
          <SelectInput
            label="Sort:"
            options={["Latest", "Oldest", "Highestrated", "Lowestrated"]}
            className={"filter-sort"}
            value={sort}
            setValue={setSort}
          />
        </div>
      </div>
      <div className="tags-container">
        {tags.map((tag) => (
          <Tag
            key={tag}
            genre={tag}
            filter={genres} // A confirmer
            genres={genres}
            setGenres={setGenres}
          />
        ))}
      </div>
    </div>
  );
}

export default Filter;
