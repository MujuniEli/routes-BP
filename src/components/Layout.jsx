import { Outlet } from "react-router-dom";
import Nav from '../components/Nav.jsx'
import Footer from "./Footer.jsx";

const Layout = () => {
            return (
                <div className="site-wrapper">
                    <Nav />
                    <main>
                        <Outlet />
                    </main>
                    <Footer />
                </div>)
};

export default Layout;