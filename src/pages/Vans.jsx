
import { Link, useSearchParams, useLoaderData } from "react-router-dom";
import { getVans } from "../server"

export const Loader = () => {
    return getVans()
}


const Vans = () => {
    
    const vans = useLoaderData()
    

    const [searchParams, setSearchParams] = useSearchParams();
    const typeFilter = searchParams.get("type")

    const vansToDisplay = typeFilter ? vans.filter(van => van.type.toLowerCase() === typeFilter) : vans

    const vanElements = vansToDisplay.map(van => (
        <div key={van.id} className="van-tile">
            <Link to={`/vans/${van.id}`} state={{ search: `?${searchParams.toString()}`, type: `${typeFilter}`}}>
            <img src={van.imageUrl} alt="van image" />
            <div className="van-info">
                <h3>{van.name}</h3>
                <p>${van.price}<span>/day</span></p>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </div>
            </Link>
        </div>
    ))

    

  return (
                <div className="van-list-container">
                    <h1>Explore our van options</h1>
                    <div className="van-list-filter-buttons">
                    <button onClick={() => setSearchParams({type:"simple"})} className={`van-type simple ${typeFilter === "simple" ? "selected" : ""}`}>Simple</button>
                    <button onClick={() => setSearchParams({type:"luxury"})} className={`van-type luxury ${typeFilter === "luxury" ? "selected" : ""}`}>Luxury</button>
                    <button onClick={() => setSearchParams({type:"rugged"})} className={`van-type rugged ${typeFilter === "rugged" ? "selected" : ""}`}>Rugged</button>
                    {typeFilter !== null && <button onClick={() => setSearchParams({})} className="van-type clear-filters">Clear filters</button>}
                    </div>
                    <div className="van-list">
                        {vanElements }
                    </div>
                </div>
  )
}

export default Vans