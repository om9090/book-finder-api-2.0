import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LinkIcon from "@mui/icons-material/Link";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
}));

export default function BookItem({ book }) {
  const [expanded, setExpanded] = React.useState(false);
  const { title, authors, imageLinks, canonicalVolumeLink } = book.volumeInfo;

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      sx={{
        width: 200,
        paddingTop: 2,
        paddingLeft: 1,
        paddingRight: 1,
        backgroundColor: "#DECBB7",
      }}
    >
      <CardMedia
        component="img"
        sx={{ objectFit: "contain" }}
        height="200"
        image={imageLinks?.thumbnail?.replace(/&edge=curl/g, "")}
        alt={`Cover of ${title} by ${authors?.join(", ")}`}
      />
      <CardActions
        disableSpacing
        sx={{
          height: "2rem",
          padding: 1,
        }}
      >
        <IconButton aria-label="link to book">
          <a
            href={canonicalVolumeLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkIcon />
          </a>
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="h6">{title}</Typography>
          <Typography variant="body2" color="textSecondary">
            {authors?.join(", ")}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

/* 

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
 */
