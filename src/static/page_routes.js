import Three from "../pages/three";
import Youtube from "../pages/youtube";
import Home from "../pages/home";

/* Should use unique ID's */
export const page_routes = [
    { name: "cgtinker", path: "", element: Home, id: 1 << 0 },
    { name: "Home", path: "/home", element: Youtube, id: 1 << 1 },
    { name: "Three", path: "/three", element: Three, id: 1 << 2 },
]
