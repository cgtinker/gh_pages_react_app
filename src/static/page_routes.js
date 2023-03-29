import About from "../pages/about";
import Home from "../pages/home";
import Three from "../pages/three";

export const page_routes = [
    { name: "cgtinker", path: "/", element: Three, id: 1 << 0 },
    { name: "Home", path: "/home", element: Home, id: 1 << 1 },
    { name: "About", path: "/about", element: About, id: 1 << 1 },
]
