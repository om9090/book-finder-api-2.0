import * as React from "react";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IosShareRoundedIcon from '@mui/icons-material/IosShareRounded';
import FlipToBackRoundedIcon from '@mui/icons-material/FlipToBackRounded';
import FlipToFrontRoundedIcon from '@mui/icons-material/FlipToFrontRounded';

export default function BookItem({ book }) {
  const { title, authors, imageLinks, canonicalVolumeLink, pageCount, categories } = book.volumeInfo;
  const [flipped, setFlipped] = React.useState(false);

  const handleFlip = () => setFlipped(!flipped);

  const cardStyle = {
    width: 200,
    paddingTop: 2,
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: 350,
  };

  const titleStyle = {
    fontSize: "1rem",
    fontWeight: "bold",
    color: "#3A3A3A",
  };

  const authorStyle = {
    fontSize: "0.9rem",
    color: "#7B7B7B",
  };

  return (
    <Card sx={cardStyle}>
      {!flipped ? (
        <CardActionArea component="a" href={canonicalVolumeLink} target="_blank" sx={{ height: "100%" }}>
          <CardMedia
            component="img"
            sx={{ objectFit: "contain" }}
            height="200"
            image={imageLinks?.thumbnail?.replace(/&edge=curl/g, "")}
            alt={`Cover of ${title} by ${authors?.join(", ")}`}
          />
          <CardContent sx={{ padding: "8px", textAlign: "center" }}>
            <Typography
              variant="body1"
              sx={{
                ...titleStyle,
                overflow: "hidden",
                display: "-webkit-box",
                WebkitLineClamp: 3, // Limit to 3 lines
                WebkitBoxOrient: "vertical",
                textOverflow: "ellipsis",
              }}
            >
              {title}
            </Typography>
            <Typography variant="body2" sx={authorStyle}>
              {authors?.join(", ")}
            </Typography>
          </CardContent>
        </CardActionArea>
      ) : (
        <CardContent sx={{ textAlign: "center" }}>
          <Typography variant="body2">Page Count: {pageCount}</Typography>
          <Typography variant="body2">Categories: {categories?.join(", ")}</Typography>
        </CardContent>
      )}

      <div className="flex flex-row justify-between" >
        {/* Flip Button */}
        <Button onClick={handleFlip}
          sx={{
            border: "none", // Remove border
            boxShadow: "none", // Remove any shadow that may appear as a border
            '&:hover': {
              backgroundColor: "#f0f0f0", // Optional: change background on hover
              boxShadow: "none", // Remove shadow on hover
            },
            '&:focus': {
              outline: "none", // Remove focus outline
              boxShadow: "none", // Remove shadow on focus
            }
          }}
        >
          {flipped ? <FlipToFrontRoundedIcon /> : <FlipToBackRoundedIcon />}
        </Button>

        {/* Share Button */}
        <Button href={canonicalVolumeLink} target="_blank">
          <IosShareRoundedIcon />
        </Button>
      </div>
    </Card>
  );
}
