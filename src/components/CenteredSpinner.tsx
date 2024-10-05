import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

interface CenterdSpinnerProps{
    height?: number;
    size?: number;
}

const CenterdSpinner = ({height, size}:CenterdSpinnerProps) => {

  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '200px',
        height: `${height}px`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        mt: 2
      }}
    >
      <CircularProgress size={size}/>
    </Box>
  );
};

export default CenterdSpinner;