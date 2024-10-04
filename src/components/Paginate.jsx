import { Pagination, Box } from "@mui/material";

const Paginate = ({ booksPerPage, totalBooks, paginate }) => {
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalBooks / booksPerPage); i++) {
    pageNumber.push(i);
  }
  return (
    <Box>
      <Pagination count={pageNumber.length} onChange={(e, p) => paginate(p)} />
    </Box>
  );
};

export default Paginate;
