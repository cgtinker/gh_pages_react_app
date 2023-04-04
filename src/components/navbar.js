import { useState } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { page_routes } from "../page_routes";
import "../styles/navbar.css";


function NavLink({ href, site, ...props }) {
  const resolvedPath = useResolvedPath(href);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  // hacky nav bar - lets go! 
  if (href === "") {
    return null;
  }

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={href} {...props}>
        {site}
      </Link>
    </li>
  );
}

export default function NavBar() {
  const [isNavExpanded, setNavExpanded] = useState(false)

  /*
  * Button should be handled differently.
  * A custom component for svg buttons seems resonable.
  * However, there's just on at the moment so what ever...
  */
  return (
    <nav className={isNavExpanded ? "navbar expanded" : "navbar"}>
      <Link to={page_routes[0].path} className="sitetitel">
        {page_routes[0].name}
      </Link>
      <button className="hamburger"
        onClick={() => {
          setNavExpanded(!isNavExpanded);
        }}>
        {/* icon from heroicons.com */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="oddeven"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="oddeven"
          />
        </svg>
      </button>

      <ul>
        {page_routes.map((page) => (
          <NavLink
            href={page.path}
            site={page.name}
            key={page.id}
            name={page.name}
            onClick={() => { setNavExpanded(false); }}
          ></NavLink>
        ))}
      </ul>
    </nav>
  );
}
