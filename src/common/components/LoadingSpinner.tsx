import { Box, CircularProgress } from '@mui/material'
import React from 'react'

const LoadingSpinner = () => {
  return (
    <Box sx={{
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <CircularProgress />
    </Box>
  )
}

export default LoadingSpinner