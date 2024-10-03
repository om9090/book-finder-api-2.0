import { useState, useEffect } from "react";

const useFetchBooks = (searchParams) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!searchParams.searchValue) {
      setBooks([]);
      return;
    }

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      const baseUrl = "https://www.googleapis.com/books/v1/volumes";
      const key = import.meta.env.VITE_GOOGLE_BOOKS_API_KEY;
      const queryParam =
        searchParams.searchType === "title"
          ? `intitle:${searchParams.searchValue}`
          : `inauthor:${searchParams.searchValue}`;

      try {
        const response = await fetch(
          `${baseUrl}?q=${queryParam}&maxResults=40&langRestrict=${searchParams.language}&printType=books&fields=items(volumeInfo/title,volumeInfo/authors,volumeInfo/imageLinks,volumeInfo/canonicalVolumeLink)&key=${key}`
        );
        const data = await response.json();
        console.log(searchParams);

        // Checking for unnecessary duplicates in results
        const uniqueBooks = [];
        data.items.forEach((item) => {
          if (
            item["volumeInfo"]["imageLinks"] &&
            item["volumeInfo"]["imageLinks"]["thumbnail"]
          ) {
            let bookExists = uniqueBooks.some(
              (book) => book.volumeInfo.title === item.volumeInfo.title
            );
            if (!bookExists) {
              if (
                searchParams.searchType === "author" &&
                item.volumeInfo?.authors?.some((author) =>
                  author
                    .toLowerCase()
                    .includes(searchParams.searchValue.toLowerCase())
                )
              ) {
                uniqueBooks.push(item);
              } else if (
                searchParams.searchType === "title" &&
                item.volumeInfo?.title
                  ?.toLowerCase()
                  .includes(searchParams.searchValue.toLowerCase())
              ) {
                uniqueBooks.push(item);
              }
            }
          }
        });

        setBooks(uniqueBooks);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [searchParams]);

  return { books, loading, error };
};

export default useFetchBooks;
