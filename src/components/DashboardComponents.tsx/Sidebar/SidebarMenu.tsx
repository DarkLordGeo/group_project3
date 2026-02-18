import Box from '@mui/material/Box'
import React from 'react'

const SidebarMenu: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignContent: 'center' }}>
      <li>Dashboard</li>
      <li>My Schedule</li>
      <li>Requests</li>
      <li>Profile</li>
    </Box>
  )
}

export default SidebarMenu
