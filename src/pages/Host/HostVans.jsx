// import { useState } from "react";
import { Link, useLoaderData, defer, Await } from "react-router-dom";
import { getHostVans } from "../../server";
import { requireAuth } from "../../utils";
import { Suspense } from "react";


export  async function Loader({ request }) {
     await requireAuth(request)
    return defer({vans: getHostVans()})
}


const HostVans = () => {
  const hostVansPromise = useLoaderData()
  // const [hostVans, setHostVans] = useState([])

  return (
            <section>
                <h1 className="host-vans-title">Your listed Vans</h1>
                <Suspense fallback={<h2>Loading Vans....</h2>}>
                <Await resolve={hostVansPromise.vans}>
                  {vans => {
                              const hostVanElements = vans.map(van => (
                                <Link
                                    to={van.id}
                                    key={van.id}
                                    className="host-van-card"
                                >
                                  <div className="host-van-single" key={van.id}>
                                    <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
                                    <div className="host-van-info">
                                      <h3>{van.name}</h3>
                                      <p>${van.price}/day</p>
                                    </div>
                                    </div>        
                                </Link>
                          ))
                          return (
                                    <div className="host-vans-list">
                                        <section>
                                            {hostVanElements}
                                        </section>
                                    </div>
                          )
                  }}
                
                </Await>
                </Suspense>
            </section>
  )
}

export default HostVans