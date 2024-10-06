import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

interface CenteredSpinnerProps {
  height?: number;
  size?: number;
}

const CenteredSpinner = ({ height, size }: CenteredSpinnerProps) => {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "200px",
        height: `${height}px`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        mt: 2,
      }}
    >
      <CircularProgress size={size} />
    </Box>
  );
};

export default CenteredSpinner;
