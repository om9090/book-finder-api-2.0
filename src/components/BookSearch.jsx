import { useState, useEffect } from "react";
import { TextField, Select, MenuItem, Button, Box } from "@mui/material";
import { languages } from "../constants/languages";
import { Search } from "@mui/icons-material";
import { InputAdornment } from "@mui/material";

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

  const handleClear = () => {
    setSearchValue("");
    setSearchType("title");
    setLanguage("en");
    setSortType("title");
    onSearch("", "title", "en", "title");
  };

  return (
    <Box
      className="search-wrapper"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 2,
      }}
    >
      <Box className="search-input-wrapper">
        <TextField
          className="search"
          label="Search for books"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          variant="outlined"
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <Search />
                </InputAdornment>
              ),
            },
          }}
        />
      </Box>

      <Box className="search-options-wrapper">
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
      </Box>
      <Box
        className="search-buttons-wrapper"
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 2,
        }}
      >
        <Button
          className="btn-search"
          variant="contained"
          onClick={handleSearch}
        >
          Search
        </Button>
        <Button className="btn-clear" variant="contained" onClick={handleClear}>
          Clear
        </Button>
      </Box>
    </Box>
  );
};

export default BookSearch;
