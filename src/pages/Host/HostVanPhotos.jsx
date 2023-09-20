import { useOutletContext } from "react-router-dom"

const HostVanPhotos = () => {
  const { currentVan } = useOutletContext()
  return (
            <section >
                <img src={currentVan.imageUrl} alt="van image" className="host-van-detail-image"/>
            </section>
  )
}

export default HostVanPhotos