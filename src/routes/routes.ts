// import Login from "../pages/Login"
// import Register from "../pages/Register"

// import type { ReactNode } from "react"

export interface RoutesInterface {
    path: string,
    label: string,
    // component: ReactNode
}

export const routes: RoutesInterface[] = [
    { path: '/login', label: 'create new account' },
    { path: '/register', label: 'Sign in' },
    { path: '/dashboard', label: 'dashboard' }

]
