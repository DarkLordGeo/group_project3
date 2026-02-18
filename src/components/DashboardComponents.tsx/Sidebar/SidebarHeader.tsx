import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import React from 'react'

const SidebarHeader:React.FC = () => {
  return (
    <Box sx={{display:'flex'}}>
        <Typography fontSize={20}>
            Dashboard header
        </Typography>
    </Box>
  )
}

export default SidebarHeader
