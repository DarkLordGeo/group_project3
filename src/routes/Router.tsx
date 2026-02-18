import React from 'react'
import { Route, Routes } from 'react-router'
import type { RoutesInterface } from './routes'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Main from '../pages/Main'
import Dashboard from '../components/Dashboard/Dashboard'

interface MainRouteProps {
    route?: RoutesInterface[]
}

const Router: React.FC<MainRouteProps> = ({ }) => {

    return (
        <Routes>
            <Route path={'/login'} element={<Login />} />
            <Route path={'/register'} element={<Register />} />
            <Route path={'/'} element={<Main />} />
            <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
    )
}

export default Router
