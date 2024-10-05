import { useState, useEffect } from "react";

const useFetchBooks = (searchParams) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (!searchParams.searchValue) {
      setBooks([]);
      return;
    }

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      setSuccess(false);
      const baseUrl = "https://www.googleapis.com/books/v1/volumes";
      const key = import.meta.env.VITE_GOOGLE_BOOKS_API_KEY;

      let queryParam = "";
      if (searchParams.searchType === "title") {
        queryParam = `intitle:"${searchParams.searchValue}"`;
      } else if (searchParams.searchType === "author") {
        const authorParts = searchParams.searchValue.split(/\s+/);
        queryParam = authorParts.map((part) => `inauthor:"${part}"`).join("+");
      } else if (searchParams.searchType === "subject") {
        queryParam = `subject:"${searchParams.searchValue}"`;
      }

      // Always use 'relevance' for API call, manual sort will happen if needed
      const apiSortType = "relevance";

      try {
        const response = await fetch(
          `${baseUrl}?q=${queryParam}&maxResults=40&langRestrict=${searchParams.language}&printType=books&orderBy=${apiSortType}&fields=items(id,volumeInfo(title,authors,description,imageLinks,canonicalVolumeLink,categories,publishedDate,publisher,pageCount,averageRating))&key=${key}`
        );
        const data = await response.json();

        if (!data.items) {
          setBooks([]);
          return;
        }

        let uniqueBooks = data.items.filter(
          (item, index, self) =>
            index ===
            self.findIndex((t) => t.volumeInfo.title === item.volumeInfo.title)
        );

        // If 'newest' is selected, sort the books by publishedDate
        if (searchParams.sortType === "newest") {
          uniqueBooks.sort((a, b) => {
            const dateA = new Date(a.volumeInfo.publishedDate || "0");
            const dateB = new Date(b.volumeInfo.publishedDate || "0");
            return dateB - dateA;
          });
        }

        setBooks(uniqueBooks);
        setSuccess(true);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [searchParams]);

  return { books, loading, error, success };
};

export default useFetchBooks;
