import Box from '@mui/material/Box'
import React from 'react'
import SidebarHeader from './SidebarHeader'
import SidebarLogout from './SidebarLogout'
import SidebarMenu from './SidebarMenu'


const Sidebar: React.FC = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',width:25,height:'100%' }} width={25} height={1}>
            <SidebarHeader />
            <SidebarMenu />
            <SidebarLogout />
        </Box>
    )
}

export default Sidebar
