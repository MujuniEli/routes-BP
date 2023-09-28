import { useRouteError } from "react-router-dom"

const Error = () => {
    const error = useRouteError()
    
  return (
            <div>
                <pre>{error.status} - {error.statusText}</pre>
                <h2>{error.message}</h2>    
            </div>
  )
}

export default Error