const SearchBar = ({ onSearch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(e.target.elements.query.value);
  };
  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="query"
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default SearchBar;
