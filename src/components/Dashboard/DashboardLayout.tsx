import Box from '@mui/material/Box'
import React from 'react'
import Sidebar from '../DashboardComponents.tsx/Sidebar/Sidebar'
import TopBoard from '../DashboardComponents.tsx/TopBoard/TopBoard'
import MainBoard from '../DashboardComponents.tsx/MainBoard.tsx/MainBoard'
const DashboardLayout: React.FC = () => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flex: '1', background: 'aqua',width:1,height:1 }} >
            <Box>
                <Sidebar />
            </Box>
            <Box sx={{ display: "flex", justifyContent: 'center', alignContent: "center", flexDirection: "column", width: 1 }} >
                <TopBoard />
                <MainBoard />
            </Box>

        </Box>
    )
}

export default DashboardLayout
