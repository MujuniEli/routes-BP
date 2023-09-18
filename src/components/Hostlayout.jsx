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
                <NavLink to="income" style={({isActive}) => isActive ? activeStyle : null}>Income</NavLink>
                <NavLink to="vans" style={({isActive}) => isActive ? activeStyle : null}>Vans</NavLink>
                <NavLink to="reviews" style={({isActive}) => isActive ? activeStyle : null}>Reviews</NavLink>
                <Outlet />
             </div>
  )
}

export default Hostlayout