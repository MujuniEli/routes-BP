
import { Link, useLocation, useLoaderData } from "react-router-dom"
import { getVans } from "../server"

export const Loader = ({ params }) => {
    return getVans(params.id)
}

const VanDetails = () => {
    
    const location = useLocation()
    const van = useLoaderData()

    const search = location.state && location.state.search || "";
    const type = location.state?.type || "all";

  return (
            <div className="van-detail-container">
                <Link to={`..${search}`} classname="back-button" relative="path">
                    &larr; <span>Back to {type} vans</span>
                </Link>
                
                    <div className="van-detail">
                        <img src={van.imageUrl} />
                        <i className={`van-type ${van.type} selected`}>{van.type}</i>
                        <h2>{van.name}</h2>
                        <p className="van-price"><span>${van.price}</span>/day</p>
                        <p>{van.description}</p>
                        <button className="link-button">Rent this van</button>
                    </div>
                
            </div>
  )
}

export default VanDetails