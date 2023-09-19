import { useParams, Link, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";


const HostVanDetails = () => {

  const { id } = useParams();
  const [currentVan, setCurrentVan] = useState(null);

   useEffect(() => {
    fetch(`/api/host/vans/${id}`)
    .then((res) => res.json())
    .then(data => setCurrentVan(data.vans))
  }, );

  if (!currentVan) {
    return <div>Loading...</div>;
  }

  return (
          <section>
            <Link to=".." classname="link-button" relative="path">
              &larr; <span>Back to all Vans</span>
            </Link>
            <div className="host-van-detail-layout-container">
                <div className="host-van-detail">
                  <img src={currentVan.imageUrl} alt={currentVan.name} />
                    <div className="host-van-detail-info-text">
                          <i className={`van-type van-type-${currentVan.type}`}>{currentVan.type}</i>
                          <h3>{currentVan.name}</h3>
                          <h4>{currentVan.price}/day</h4> 
                          
                    </div>
                </div>
              </div>
              <Outlet />
          </section>   
  )
}

export default HostVanDetails