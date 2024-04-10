import { useState } from "react";
import s from "../SearchBar/SearchBar.module.css";

const SearchBar = ({ onSearch, emptyField }) => {
  const [mes, setMes] = useState("");

  function changeText(e) {
    setMes(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(e.target.elements.query.value);
    if (mes.trim() === "") {
      emptyField();
      return;
    } else {
      onSearch(mes);

      e.target.reset();
    }
  };

  return (
    <div>
      <header className={s.header}>
        <form className={s.form} onSubmit={handleSubmit}>
          <input
            className={s.input}
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={changeText}
          />
          <button className={s.btn} type="submit">
            Search
          </button>
        </form>
      </header>
    </div>
  );
};

export default SearchBar;
