import Three from "./pages/three";
import Home from "./pages/home";
import Framer from "./pages/framer";

/* Should use unique ID's */
export const page_routes = [
  { name: "cgtinker", path: "/", element: Home, id: 1 << 0 },
  { name: "Three", path: "/three", element: Three, id: 1 << 2 },
  { name: "Framer", path: "/framer", element: Framer, id: 1 << 3 },
]
