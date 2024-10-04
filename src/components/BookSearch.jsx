import { useState, useEffect } from "react";
import { TextField, Select, MenuItem, Button, Box } from "@mui/material";
import { languages } from "../constants/languages";
import { Search } from "@mui/icons-material";
import { InputAdornment } from "@mui/material";

const BookSearch = ({ onSearch, searchParams }) => {
  const [searchValue, setSearchValue] = useState(searchParams.searchValue);
  const [searchType, setSearchType] = useState(searchParams.searchType);
  const [language, setLanguage] = useState(searchParams.language);
  const [sortType, setSortType] = useState(
    searchParams.sortType || "relevance"
  );

  useEffect(() => {
    setSearchValue(searchParams.searchValue);
    setSearchType(searchParams.searchType);
    setLanguage(searchParams.language);
    setSortType(searchParams.sortType);
  }, [searchParams]);

  const handleSearch = () => {
    onSearch(searchValue, searchType, language, sortType);
  };

  const handleClear = () => {
    setSearchValue("");
    setSearchType("title");
    setLanguage("en");
    setSortType("relevance");
    onSearch("", "title", "en", "relevance");
  };

  return (
    <Box
      className="full-search-wrapper"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        alignItems: "center",
        marginBottom: 2,
      }}
    >
      <TextField
        label="Search for books"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        variant="outlined"
        fullWidth
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Search />
            </InputAdornment>
          ),
        }}
      />
      <Box sx={{ display: "flex", gap: 2, width: "100%" }}>
        <Select
          value={searchType}
          onChange={(e) => setSearchType(e.target.value)}
          variant="outlined"
          fullWidth
        >
          <MenuItem value="title">Title</MenuItem>
          <MenuItem value="author">Author</MenuItem>
          <MenuItem value="subject">Subject</MenuItem>
        </Select>
        <Select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          variant="outlined"
          fullWidth
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
          fullWidth
        >
          <MenuItem value="relevance">Relevance</MenuItem>
          <MenuItem value="newest">Newest</MenuItem>
        </Select>
      </Box>
      <Box sx={{ display: "flex", gap: 2 }}>
        <Button variant="contained" onClick={handleSearch}>
          Search
        </Button>
        <Button variant="outlined" onClick={handleClear}>
          Clear
        </Button>
      </Box>
    </Box>
  );
};

export default BookSearch;
