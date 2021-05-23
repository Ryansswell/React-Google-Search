import { NavLink, useLocation } from "react-router-dom";

function Nav({ exact, to, children }) {
    const { pathname } = useLocation();
    return (
        <li className="nav-item mx-3">
            <NavLink clNavLinkssName="nav-link" exact={exact} to={to}>
                {children} {" "}
                {pathname === "/" && <span className="sr-only">(current)</span>}
            </NavLink>
        </li>
    );
}

export default Nav;