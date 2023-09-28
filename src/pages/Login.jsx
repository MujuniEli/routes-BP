import { useNavigate } from "react-router-dom"

const Login = () => {
        const [loginFormData, setLoginFormData] = useState({email: "", password: ""})

        function handleSubmit(e) {
            e.preventDefault()
            console.log(loginFormData)
        }

  return (
            <div className="login-container">
                <h1>Sign in to your account</h1>
            </div>
  )
}

export default Login