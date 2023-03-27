import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { page_routes } from "../static/page_routes";
import "../style.css";
const isActive = true

function NavLink({ href, site, ...props }) {
    const resolvedPath = useResolvedPath(href)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    if (href === '/') {
        return null
    }

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={href} {...props}>{site}</Link>
        </li >
    )
}

export default function NavBar() {
    return <nav className="nav">

        <Link to={page_routes[0].path} className="sitetitel">{page_routes[0].name}</Link>

        <ul>
            {page_routes.map((page) =>
                <NavLink
                    href={page.path}
                    site={page.name}
                    key={page.id}>
                </NavLink>
            )}
        </ul>
    </nav>
}