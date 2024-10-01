import { useState, useEffect } from "react";
import { languages } from "../constants/languages";

const BookSearch = ({ onSearch, searchParams }) => {
  const [searchValue, setSearchValue] = useState(searchParams.searchValue);
  const [searchType, setSearchType] = useState(searchParams.searchType);
  const [language, setLanguage] = useState(searchParams.language);
  const [sortType, setSortType] = useState(searchParams.sortType);

  useEffect(() => {
    setSearchValue(searchParams.searchValue);
    setSearchType(searchParams.searchType);
    setLanguage(searchParams.language);
    setSortType(searchParams.sortType);
  }, [searchParams]);

  const handleSearch = () => {
    onSearch(searchValue, searchType, language, sortType);
  };

  return (
    <div>
      <input
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Search for books"
      />
      <select
        value={searchType}
        onChange={(e) => setSearchType(e.target.value)}
      >
        <option value="title">Title</option>
        <option value="author">Author</option>
      </select>
      <select value={language} onChange={(e) => setLanguage(e.target.value)}>
        {languages.map((language) => (
          <option key={language.lang} value={language.lang}>
            {language.name}
          </option>
        ))}
      </select>
      <select value={sortType} onChange={(e) => setSortType(e.target.value)}>
        <option value="title">Sort by Title</option>
        <option value="author">Sort by Author</option>
      </select>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default BookSearch;
