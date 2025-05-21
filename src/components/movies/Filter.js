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
    "action",
    "drama",
    "comedy",
    "biography",
    "romance",
    "thriller",
    "war",
    "history",
    "sport",
    "sci-fi",
    "documentary",
    "crime",
    "fantasy",
  ];
  return (
    <div>
      <SearchBar title={title} setTitle={setTitle} />
      <Input
        label="Min Date:"
        type="number"
        className={""}
        value={minYear}
        setValue={setMinYear}
      />
      <Input
        label="Max Date:"
        type="number"
        className={""}
        value={maxYear}
        setValue={setMaxYear}
      />
      <SelectInput
        label="Sort:"
        options="['latest', 'Default']"
        className={""}
        value={sort}
        setValue={setSort}
      />
      <div>
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
