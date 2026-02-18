// import { useState } from 'react'
import Router from './routes/Router'
// import { routes } from './routes/routes'

// import { styled } from '@mui/material/styles';
// import Grid from '@mui/material/Grid';
// import Paper from '@mui/material/Paper';
// import Box from '@mui/material/Box';

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: (theme.vars ?? theme).palette.text.secondary,
//   ...theme.applyStyles('dark', {
//     backgroundColor: '#1A2027',
//   }),
// }));

function App() {


  return (
    <>
      {/* <div> */}

      {/* <Grid container spacing={12}> */}
      {/* <Typography component="h1" variant='h6'>Courier management </Typography> */}
      <Router />
      {/* </div> */}

    </>
  )
}

export default App
