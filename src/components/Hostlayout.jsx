import { NavLink, Outlet } from "react-router-dom";

const Hostlayout = () => {
  return (
             <div className="host-nav">
                
                <NavLink to="/host">Dashboard</NavLink>
                <NavLink to="/host/income">Income</NavLink>
                <NavLink to="/host/reviews">Reviews</NavLink>
                <Outlet />
             </div>
  )
}

export default Hostlayout