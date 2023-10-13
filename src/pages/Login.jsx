import { useLoaderData } from "react-router-dom"
import { useState } from "react"
import { loginUser } from "../server"

export function Loader( {request} ) {
    return new URL(request.url).searchParams.get("message")
}

const Login = () => {
        const [loginFormData, setLoginFormData] = useState({email: "", password: ""})
        const [status, setStatus] = useState("idle")
        const [error, setError] = useState(null)
        const message = useLoaderData()

        function handleSubmit(e) {
            e.preventDefault()
            setStatus("submitting")
            setError(null)
            loginUser(loginFormData)
            .then(data => console.log(data))
            .catch(err => setError(err))
            .finally(() => setStatus("idle"))

        }

        function handleChange(e) {
            setLoginFormData({...loginFormData, [e.target.name]: e.target.value})
        }

  return (
            <div className="login-container">
                <h1>Sign in to your account</h1>
                {message && <h3 className="red">{message}</h3>}
                {error && <h3 className="red">{error.message}</h3>}
                <form onSubmit={handleSubmit} className="login-form">
                    <input
                        name="email" 
                        onChange={handleChange}
                        type="email"
                        placeholder="Email Address"
                        value={loginFormData.email} 
                    />

                    <input
                        name="password" 
                        onChange={handleChange}
                        type="password"
                        placeholder="Password"
                        value={loginFormData.password}
                     />  
                     <button disabled = {status === "submitting"}>
                        {status === "submitting"
                            ? "Logging in..."
                            : "Log in"
                        }
                        
                     </button> 
                </form>
            </div>
  )
}

export default Login