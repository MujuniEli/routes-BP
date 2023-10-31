import { Link, NavLink, Outlet, useLoaderData, defer, Await } from "react-router-dom";
import { getHostVans } from "../../server";
import { requireAuth } from "../../utils";
import { Suspense } from "react";

export async function Loader({ params, request }) {
  await requireAuth(request)
  return defer({currentVan: getHostVans(params.id)})
}


const HostVanDetails = () => {

  const currentVanPromise = useLoaderData()

  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  }

  return (
          <section>
            <Link to=".." classname="link-button" relative="path">
              &larr; <span>Back to all Vans</span>
            </Link>
            <div className="host-van-detail-layout-container">
              <Suspense fallback={<h2>Loading Van...</h2>}>
              <Await resolve={currentVanPromise.currentVan}>
                {currentVan => {
                                    <div className="host-van-detail">
                                          <img src={currentVan.imageUrl} alt={currentVan.name} />
                                            <div className="host-van-detail-info-text">
                                                  <i className={`van-type van-type-${currentVan.type}`}>{currentVan.type}</i>
                                                  <h3>{currentVan.name}</h3>
                                                  <h4>{currentVan.price}/day</h4> 
                                                  
                                            </div>
                                    </div>
                                    return (
                                      <>
                                          <nav className="host-van-detail-nav">
                                              <NavLink to="." end style={({ isActive }) => isActive ? activeStyle : null } >Details</NavLink>
                                              <NavLink to="pricing" style={({ isActive }) => isActive ? activeStyle : null } >Pricing</NavLink>
                                              <NavLink to="photos" style={({ isActive }) => isActive ? activeStyle : null } >Photos</NavLink>
                                          </nav>
                        
                                            <Outlet context={{currentVan}}/>
                                       </>
                                    )
                }}
              </Await>
              </Suspense>
              </div>
              
          </section>   
  )
}

export default HostVanDetails