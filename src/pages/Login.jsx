import { useNavigate } from "react-router-dom"
import { useState } from "react"

const Login = () => {
        const [loginFormData, setLoginFormData] = useState({email: "", password: ""})

        function handleSubmit(e) {
            e.preventDefault()
            console.log(loginFormData)
        }

        function handleChange(e) {
            setLoginFormData({...loginFormData, [e.target.name]: e.target.value})
        }

  return (
            <div className="login-container">
                <h1>Sign in to your account</h1>
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
                </form>
            </div>
  )
}

export default Login