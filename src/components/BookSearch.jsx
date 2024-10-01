import { useState, useEffect } from "react";
import { TextField, Select, MenuItem, Button, Box } from "@mui/material";
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
    <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
      <TextField
        label="Search for books"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        variant="outlined"
      />
      <Select
        value={searchType}
        onChange={(e) => setSearchType(e.target.value)}
        variant="outlined"
      >
        <MenuItem value="title">Title</MenuItem>
        <MenuItem value="author">Author</MenuItem>
      </Select>
      <Select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        variant="outlined"
      >
        {languages.map((language) => (
          <MenuItem key={language.lang} value={language.lang}>
            {language.name}
          </MenuItem>
        ))}
      </Select>
      <Select
        value={sortType}
        onChange={(e) => setSortType(e.target.value)}
        variant="outlined"
      >
        <MenuItem value="title">Sort by Title</MenuItem>
        <MenuItem value="author">Sort by Author</MenuItem>
      </Select>
      <Button variant="contained" onClick={handleSearch}>
        Search
      </Button>
    </Box>
  );
};

export default BookSearch;
