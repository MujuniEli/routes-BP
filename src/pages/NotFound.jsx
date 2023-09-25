import { Link } from "react-router-dom"

const NotFound = () => {
  return (
            <div className="not-found-container">
                <h3>Sorry! the page you were looking for was not found</h3>
                <Link to={'/'}className="link-button">Return to Home</Link>
            </div>
  )
}

export default NotFound