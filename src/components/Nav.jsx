import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav">
        <Link to="/" className="site-logo">#Vanlife</Link>
        <div className="nav-list">
            <Link to="/about">About</Link>
            <Link to="/vans">Vans</Link>
            <Link to="/host">Host</Link>
        </div>
    </nav>
  )
}

export default Nav