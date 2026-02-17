import React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router'

const Main: React.FC = () => {
    const navigate = useNavigate()
    return (
        <div>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                minHeight="100vh">
                <Button variant="contained" onClick={() => navigate('/login')}>Go to project</Button>
            </Box>

        </div>
    )
}

export default Main
