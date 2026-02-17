import React from 'react'
import RegisterComponent from '../components/RegisterComponent.tsx';

// import { styled } from '@mui/material/styles';
// import Grid from '@mui/material/Grid';
// import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

// import Container from '@mui/material/Container'

// import SignUp from ''



import SignUpComponent from '../components/SignUpComponent.tsx'





// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: (theme.vars ?? theme).palette.text.secondary,
//     ...theme.applyStyles('dark', {
//         backgroundColor: '#1A2027',
//     }),
// }));


const Register: React.FC = () => {
    return (
        <div>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                minHeight="100vh">


                <RegisterComponent />

                {/* <Container maxWidth='sm' sx={{ height: '400px', width:'400px', bgcolor:'red', padding:'32px 40px' }}>
                   
                </Container> */}
                {/* <Grid size={2}>
                    <Item>2</Item>
                </Grid> */}
            </Box>
        </div>
    )
}

export default Register
