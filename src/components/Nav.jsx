import { NavLink, Link } from "react-router-dom";
import icon from "../assets/images/user-fml.gif"

const Nav = () => {
  return (
    <nav className="nav">
        <Link to="/" className="site-logo">#Vanlife</Link>
        <div className="nav-list">
            <NavLink to="/about" className={({isActive}) => isActive ? "active-link" : ""}>About</NavLink>
            <NavLink to="/vans" className={({isActive}) => isActive ? "active-link" : ""}>Vans</NavLink>
            <NavLink to="/host" className={({isActive}) => isActive ? "active-link" : ""}>Host</NavLink>
            <Link to="/login" className="login-link">
                <img src="" 
                alt="login icon"
                className="login-icon" 
                />
            </Link>
        </div>
    </nav>
  )
}

export default Nav