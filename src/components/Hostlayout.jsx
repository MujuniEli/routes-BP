import { NavLink, Outlet } from "react-router-dom";


const activeStyle = {
  fontWeight: "bold",
  textDecoration: "underline",
  color: "#161616",
}

const Hostlayout = () => {
  return (    
            
             <div className="host-nav">
                
                <NavLink to="/host" end style={({isActive}) => isActive ? activeStyle : null}>Dashboard</NavLink>
                <NavLink to="/host/income" style={({isActive}) => isActive ? activeStyle : null}>Income</NavLink>
                <NavLink to="/host/vans" style={({isActive}) => isActive ? activeStyle : null}>Vans</NavLink>
                <NavLink to="/host/reviews" style={({isActive}) => isActive ? activeStyle : null}>Reviews</NavLink>
                <Outlet />
             </div>
  )
}

export default Hostlayout