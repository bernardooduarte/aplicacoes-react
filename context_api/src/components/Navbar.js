import { NavLink } from "react-router-dom";
import "./Navbar.css"

const NavBar = () => {
    return (
        <div>
            <nav>
            <NavLink to="/" exact>Home</NavLink>
            <NavLink to="/about" exact>About</NavLink>
            <NavLink to="/products" exact>Products</NavLink>
            </nav>
        </div>
    )
}

export default NavBar