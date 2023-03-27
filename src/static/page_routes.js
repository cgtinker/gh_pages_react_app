import About from "../pages/about";
import Home from "../pages/home";

export const page_routes = [
    { name: "cgtinker", path: "/", element: Home, id: 1 << 0 },
    { name: "About", path: "/about", element: About, id: 2 << 1 },
    { name: "Home", path: "/home", element: Home, id: 3 << 1 },
]
