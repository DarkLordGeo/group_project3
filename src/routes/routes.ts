import Login from "../pages/Login"
import Register from "../pages/Register"

export interface RoutesInterface {
    path: string,
    label: string,
    // component: React.FC
}

export const routes: RoutesInterface[] = [
    { path: '/login', label: 'create new account' },
    { path: '/register', label: 'Sign in' }
]
