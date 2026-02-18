import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useId } from 'react';
// import Checkbox from '@mui/material/Checkbox';
// import CssBaseline from '@mui/material/CssBaseline';
// import Divider from '@mui/material/Divider';
// import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
// import { useState } from 'react';
import FormControl from '@mui/material/FormControl';
// import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
// import Stack from '@mui/material/Stack';
import MuiCard from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router';

import Select from '@mui/material/Select';
import type { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
// import IconButton from '@mui/material/IconButton';
// import AppTheme from './theme/AppTheme';
// import ColorModeSelect from './theme/ColorModeSelect';
// import { GoogleIcon, FacebookIcon, SitemarkIcon } from './components/CustomIcons';

const Card = styled(MuiCard)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    width: '100%',
    padding: theme.spacing(4),
    gap: theme.spacing(2),
    margin: 'auto',
    boxShadow:
        'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
    [theme.breakpoints.up('sm')]: {
        width: '450px',
    },
    ...theme.applyStyles('dark', {
        boxShadow:
            'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
    }),
}));

interface WorkScheduleInterface {
    work_day: number,
    work_day_id: string
    date: {
        day: string,
        from: string,
        to: string
    }
}


export default function RegisterComponent() {
    const [emailError, setEmailError] = React.useState(false);
    const [emailErrorMessage, setEmailErrorMessage] = React.useState('');
    const [passwordError, setPasswordError] = React.useState(false);
    const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');
    const [nameError, setNameError] = React.useState(false);
    const [nameErrorMessage, setNameErrorMessage] = React.useState('');
    // console.log(props)

    const [role, setRole] = useState<string>('')

    const initialState = { work_day: 0, work_day_id: '', date: { day: '', from: '', to: '' } }

    const [schedule, setSchedule] = useState<WorkScheduleInterface>(initialState)
    // const 
    // console.log(schedule)
    const id = useId()
    const setUpSchedules = () => {
        // setSchedule({...schedule, work_day: schedule.work_day += 1})
        // , date: { day: '', from: '', to: '' }
        setSchedule({ ...schedule, work_day: schedule.work_day += 1, work_day_id: schedule.work_day_id = id })
    }

    const removeSchedule = () => {
        // continue
        console.log(schedule.work_day_id)
    }
    // console.log(schedule)
    // console.log(Array(schedule.work_day).fill(0))
    const validateInputs = () => {
        const email = document.getElementById('email') as HTMLInputElement;
        const password = document.getElementById('password') as HTMLInputElement;
        const name = document.getElementById('name') as HTMLInputElement;
        // const select = document.getElementById('select_role') as HTMLSelectElement
        // const select = document.get
        // setRole(select.value)
        // console.log(select.value)

        let isValid = true;

        if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
            setEmailError(true);
            setEmailErrorMessage('Please enter a valid email address.');
            isValid = false;
        } else {
            setEmailError(false);
            setEmailErrorMessage('');
        }

        if (!password.value || password.value.length < 6) {
            setPasswordError(true);
            setPasswordErrorMessage('Password must be at least 6 characters long.');
            isValid = false;
        } else {
            setPasswordError(false);
            setPasswordErrorMessage('');
        }

        if (!name.value || name.value.length < 1) {
            setNameError(true);
            setNameErrorMessage('Name is required.');
            isValid = false;
        } else {
            setNameError(false);
            setNameErrorMessage('');
        }

        return isValid;
    };

    // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    //     if (nameError || emailError || passwordError) {
    //         event.preventDefault();
    //         return;
    //     }
    //     const data = new FormData(event.currentTarget);
    //     console.log({
    //         name: data.get('name'),
    //         lastName: data.get('lastName'),
    //         email: data.get('email'),
    //         password: data.get('password'),
    //     });
    // };

    const handleRoleChange = (event: SelectChangeEvent) => {
        setRole(event.target.value as string)
    }

    return (
        <>
            <div style={{ marginTop: '50px' }}>
                <Card variant="outlined">
                    <Typography
                        component="h1"
                        variant="h4"
                        sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)', textAlign: 'center' }}
                    >
                        Create your account
                    </Typography>
                    <Typography
                        component="h1"
                        variant="h4"
                        sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)', textAlign: 'center', typography: { fontSize: '15px' } }}
                    >
                        {/* <Box sx={{marginRight:'30px', width:'auto' }} > */}
                        <span>Already have an account?</span>
                        {/* </Box> */}
                        <Link to={'/login'} style={{ marginLeft: '2px' }}> Sign in</Link>

                    </Typography>
                    <Box
                        component="form"
                        // onSubmit={handleSubmit}
                        sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
                    >
                        <FormControl fullWidth>
                            <FormLabel>Select role</FormLabel>
                            <Select
                                value={role}
                                onChange={handleRoleChange}
                            >
                                <MenuItem value={'admin'}>admin</MenuItem>
                                <MenuItem value={'user'}>user</MenuItem>
                                <MenuItem value={'courier'}>courier</MenuItem>
                            </Select>
                        </FormControl>
                        <Box sx={{ display: 'flex', gap: '5px', flex: '1' }}>
                            <FormControl>
                                <FormLabel htmlFor="name">first name</FormLabel>
                                <TextField
                                    autoComplete="name"
                                    name="name"
                                    required
                                    fullWidth
                                    id="name"
                                    error={nameError}
                                    helperText={nameErrorMessage}
                                    color={nameError ? 'error' : 'primary'}
                                />
                            </FormControl>
                            <FormControl>
                                <FormLabel htmlFor="name">last name</FormLabel>
                                <TextField
                                    autoComplete="name"
                                    name="name"
                                    required
                                    fullWidth
                                    id="name"
                                    error={nameError}
                                    helperText={nameErrorMessage}
                                    color={nameError ? 'error' : 'primary'}
                                />
                            </FormControl>
                        </Box>

                        <Box sx={{ display: 'flex', gap: '5px', flex: '1' }}>
                            <FormControl>
                                <FormLabel htmlFor="email">Email</FormLabel>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    placeholder="your@email.com"
                                    name="email"
                                    autoComplete="email"
                                    variant="outlined"
                                    error={emailError}
                                    helperText={emailErrorMessage}
                                    color={passwordError ? 'error' : 'primary'}
                                />
                            </FormControl>
                            <FormControl >
                                <FormLabel htmlFor="password">Password</FormLabel>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    placeholder="••••••"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                    variant="outlined"
                                    error={passwordError}
                                    helperText={passwordErrorMessage}
                                    color={passwordError ? 'error' : 'primary'}
                                />
                            </FormControl>
                        </Box>

                        <Box sx={{ display: 'flex', gap: '5px', flex: '1' }}>
                            <FormControl>
                                <FormLabel htmlFor="email">Phone</FormLabel>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    placeholder="your@email.com"
                                    name="email"
                                    autoComplete="email"
                                    variant="outlined"
                                    error={emailError}
                                    helperText={emailErrorMessage}
                                    color={passwordError ? 'error' : 'primary'}
                                />
                            </FormControl>
                            <FormControl >
                                <FormLabel htmlFor="password">Personal id</FormLabel>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    variant="outlined"
                                    error={passwordError}
                                    helperText={passwordErrorMessage}
                                    color={passwordError ? 'error' : 'primary'}
                                />
                            </FormControl>
                        </Box>

                        {role === 'user' &&
                            <FormControl>
                                <FormLabel htmlFor="email">Address</FormLabel>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    placeholder="your address com"
                                    name="email"
                                    autoComplete="email"
                                    variant="outlined"
                                    error={emailError}
                                    helperText={emailErrorMessage}
                                    color={passwordError ? 'error' : 'primary'}
                                />
                            </FormControl>
                        }
                        {role === 'courier' &&
                            <div>
                                <FormControl sx={{ width: 1 }}>
                                    <FormLabel htmlFor="email" >Vechile type</FormLabel>
                                    <TextField
                                        required
                                        // fullWidth
                                        id="email"
                                        name="email"
                                        autoComplete="email"
                                        variant="outlined"
                                        error={emailError}
                                        helperText={emailErrorMessage}
                                        color={passwordError ? 'error' : 'primary'}

                                    />
                                </FormControl>
                                <Box sx={{ marginTop: '15px', display: 'flex', justifyContent: "space-evenly", textAlign: 'center' }}>
                                    <Typography sx={{ textAlign: 'center' }}>Working Schedule (Min 5 days) </Typography>
                                    <Button variant='contained' color='secondary' onClick={setUpSchedules}>Add days +</Button>
                                </Box>
                                {/* <Box mt={2}>
                                
                                </Box> */}
                                <Box mt={2} width={1}>
                                    {Array(schedule.work_day).fill(0).map((item) => (
                                        <Box sx={{ display: 'flex', justifyContent: 'space-evenly', gap: 0, alignItems: 'center' }}>
                                            <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2, alignItems: 'center' }}>
                                                <FormControl fullWidth>
                                                    <FormLabel>Select date</FormLabel>
                                                    <Select
                                                    // value={role}
                                                    // onChange={handleRoleChange}
                                                    >
                                                        <MenuItem>monday</MenuItem>
                                                        <MenuItem>tuesday</MenuItem>
                                                        <MenuItem>thursday</MenuItem>
                                                        <MenuItem>friday</MenuItem>
                                                        <MenuItem>sunday</MenuItem>
                                                    </Select>
                                                </FormControl>
                                                <FormControl fullWidth>
                                                    <FormLabel>Select date</FormLabel>
                                                    <Select
                                                    // value={role}
                                                    // onChange={handleRoleChange}
                                                    >
                                                    </Select>
                                                </FormControl>
                                                <FormControl fullWidth>
                                                    <FormLabel>Select date</FormLabel>
                                                    <Select
                                                    // value={role}
                                                    // onChange={handleRoleChange}
                                                    >
                                                        <MenuItem>monday</MenuItem>
                                                        <MenuItem>tuesday</MenuItem>
                                                        <MenuItem>thursday</MenuItem>
                                                        <MenuItem>friday</MenuItem>
                                                        <MenuItem>sunday</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </Box>
                                            <Box>
                                                <Button variant="contained" color="error" onClick={removeSchedule}>
                                                    Delete
                                                </Button>
                                            </Box>
                                        </Box>

                                    ))}
                                </Box>


                                < div />


                            </div>
                        }
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            onClick={validateInputs}
                        >
                            Create an account
                        </Button>
                    </Box>
                    {/* conditionals */}
                </Card>
            </div >

        </>

    );
}


