import { useState } from "react";
import BookSearch from "./components/BookSearch";
import BookList from "./components/BookList";
import useFetchBooks from "./hooks/useFetchBooks";
import "./App.css";

const App = () => {
  const [searchParams, setSearchParams] = useState({
    searchValue: "",
    searchType: "title",
    language: "en",
    sortType: "title",
  });
  const { books, loading, error } = useFetchBooks(searchParams);

  const handleSearch = (searchValue, searchType, language, sortType) => {
    setSearchParams({ searchValue, searchType, language, sortType });
  };

  const handleClear = () => {
    setSearchParams({
      searchValue: "",
      searchType: "title",
      language: "en",
      sortType: "title",
    });
  };

  const sortBooks = (books, sortType) => {
    if (sortType === "title") {
      return books.sort((a, b) => {
        const titleA = a.volumeInfo?.title?.toLowerCase();
        const titleB = b.volumeInfo?.title?.toLowerCase();
        if (titleA < titleB) return -1;
        if (titleA > titleB) return 1;
        return 0;
      });
    } else if (sortType === "author") {
      return books.sort((a, b) => {
        const authorA = a.volumeInfo?.authors?.[0]?.toLowerCase().split(" ");
        const authorB = b.volumeInfo?.authors?.[0]?.toLowerCase().split(" ");
        if (authorA[0] < authorB[0]) return -1;
        if (authorA[0] > authorB[0]) return 1;
        if (authorA[1] < authorB[1]) return -1;
        if (authorA[1] > authorB[1]) return 1;
        return 0;
      });
    }
    return books;
  };

  const sortedBooks = sortBooks(books, searchParams.sortType);

  return (
    <div>
      <BookSearch onSearch={handleSearch} searchParams={searchParams} />
      <button onClick={handleClear}>Clear</button>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      <BookList books={sortedBooks} />
    </div>
  );
};

export default App;
