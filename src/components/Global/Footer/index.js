import { Box, Typography } from '@mui/material'
import React from 'react'

export const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#F0EEF0",
        px: "100px",
        py: "30px"
      }}
    >
        <Typography
          sx={{
            fontFamily: "Gabarito",
            fontWeight: 600,
            textAlign: "center",
            color: "rgba(0, 0, 0, 0.3)"
          }}
        >
          &copy; All rights reserved Harshal Photography
        </Typography>
    </Box>
  )
}


