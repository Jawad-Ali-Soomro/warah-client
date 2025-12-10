import { Accessibility } from "./global";
import { Home } from "./pages";

export const routes = [
    {
        path: '/',
        element: <Accessibility />,
        requireAuth: false
    },
    {
        path: '/home',
        element: <Home />,
        requireAuth: false
    }
]