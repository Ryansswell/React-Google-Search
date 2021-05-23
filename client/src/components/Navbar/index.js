import { Link } from "react-router-dom";
import Nav from "./Nav"


function Navbar() {
    return (
        <nav class="navbar navbar-light bg-light">
            <Link className="navbar-brand" to="/">
                React Google Books Info!
                </Link>
            <ul className="navbar-nav flex-row mr-auto">
                <Nav exact to="/">
                    Search
                </Nav>
                <Nav to="/saved">Saved</Nav>
            </ul>
        </nav>
    );
}

export default Navbar;