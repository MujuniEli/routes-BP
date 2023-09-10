import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const HostVans = () => {
  const params = useParams();
  const [hostVans, setHostVans] = useState(null);

  return (
    <div>HostVans</div>
  )
}

export default HostVans