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
        "& > :not(style)": {
          m: 1,
          width: 128,
          height: 128,
        },
      }}
    >
      {books.map((book, index) => (
        <BookItem key={book.id || index} book={book} />
      ))}
    </Box>
  );
};

export default BookList;
