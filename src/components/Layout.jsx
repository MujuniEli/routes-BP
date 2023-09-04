import { Outlet } from "react-router-dom";
import Nav from '../components/Nav.jsx'

const Layout = () => {
            return (
                <div className="layout">
                    <Nav />
                    <Outlet />
                </div>)
};

export default Layout;