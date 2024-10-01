import Box from "@mui/material/Box";
import BookItem from "./BookItem";

const BookList = ({ books }) => {
  return (
    <Box
      className="data-wrapper"
      sx={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "1rem",
      }}
    >
      {books.map((book, index) => (
        <BookItem key={book.id || index} book={book} />
      ))}
    </Box>
  );
};

export default BookList;
