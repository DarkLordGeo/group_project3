import Box from '@mui/material/Box'
import React from 'react'
import Profile from './Profile'
import WelcomeText from './WelcomeText'

const TopBoard: React.FC = () => {
    return (
        <Box width={1} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <WelcomeText />
            <Profile />
        </Box>
    )
}

export default TopBoard
