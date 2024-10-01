import { Box } from "@mui/material";

const BookItem = ({ book }) => {
  const { title, authors, imageLinks, canonicalVolumeLink } = book.volumeInfo;

  return (
    <Box
      className="book-wrapper"
      sx={{
        width: "200px !important",
        height: "280px !important",
        display: "flex",
        flexDirection: "column",
        alignItems: "space-between",
      }}
    >
      <div className="book-info">
        <a href={canonicalVolumeLink} target="_blank" className="book-title">
          {title}
        </a>
        <br />
        <a href={canonicalVolumeLink} target="_blank" className="book-author">
          {authors?.join(", ")}
        </a>
      </div>
      <div className="cover-wrapper">
        <img
          src={imageLinks?.thumbnail?.replace(/&edge=curl/g, "")}
          alt={`Cover of ${title} by ${authors?.join(", ")}`}
          className="book-cover"
        />
      </div>
    </Box>
  );
};

export default BookItem;
