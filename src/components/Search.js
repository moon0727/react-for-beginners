import { useState } from "react";
import style from "./Search.module.css";

function Search({ movies, onSubmit }) {
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onSubmit(search);
    }
  };
  return (
    <input
      className={style.searchInput}
      value={search}
      onChange={onChangeSearch}
      onKeyDown={onKeyDown}
      placeholder="title search..."
    />
  );
}

export default Search;
