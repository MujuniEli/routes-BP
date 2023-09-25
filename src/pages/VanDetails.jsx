import { useEffect, useState } from "react";
import { useParams, Link, useLocation } from "react-router-dom"

const VanDetails = () => {
    const params = useParams();
    const [van, setVan] = useState(null)
    const location = useLocation()
    
    useEffect(() => {
        fetch(`/api/vans/${params.id}`)
        .then(res => res.json())
        .then(data => setVan(data.vans))
    }, [params.id])

    const search = location.state && location.state.search || ""
    const type = location.state && location.state.type || "all"

  return (
            <div className="van-detail-container">
                <Link to={`..${search}`} classname="back-button" relative="path">
                    &larr; <span>Back to {type} Vans</span>
                </Link>
                {van ? (
                    <div className="van-detail">
                        <img src={van.imageUrl} />
                        <i className={`van-type ${van.type} selected`}>{van.type}</i>
                        <h2>{van.name}</h2>
                        <p className="van-price"><span>${van.price}</span>/day</p>
                        <p>{van.description}</p>
                        <button className="link-button">Rent this van</button>
                    </div>
                ): <h2>Loading...</h2>}
            </div>
  )
}

export default VanDetails