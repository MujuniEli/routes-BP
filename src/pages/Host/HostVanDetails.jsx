import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";


const HostVanDetails = () => {

  const { id } = useParams();
  const [currentVan, setCurrentVan] = useState(null);

   useEffect(() => {
    fetch(`/api/host/vans/${id}`)
    .then((res) => res.json())
    .then(data => setCurrentVan(data.vans))
  }, []);

  if (!currentVan) {
    return <div>Loading...</div>;
  }

  return (
            <div>
              <img src={currentVan.imageUrl} width={150} alt={currentVan.name} />
              <h2>{currentVan.name}</h2>
              <p>{currentVan.price}</p> 
              <p>{currentVan.type}</p>
              </div>
  )
}

export default HostVanDetails