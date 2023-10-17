import { useLoaderData, Form, useNavigate } from "react-router-dom"
import { useState} from "react"
import { loginUser } from "../server"

export function Loader( {request} ) {
    return new URL(request.url).searchParams.get("message")
}

export async function action({ request }) {
    const formData = await request.formData()
    const email = formData.get("email")
    const password = formData.get("password")
    const data = await loginUser({ email, password})
    localStorage.setItem("loggedIn", true)
    return null
}

const Login = () => {
        const [status, setStatus] = useState("idle")
        const [error, setError] = useState(null)
        const message = useLoaderData()
        const navigate = useNavigate()

        function handleSubmit(e) {
            e.preventDefault()
            setStatus("submitting")
            setError(null)
            loginUser(loginFormData)
            .then(data => console.log(data))
            .catch(err => setError(err))
            .finally(() => setStatus("idle"))

        }

      

  return (
            <div className="login-container">
                <h1>Sign in to your account</h1>
                {message && <h3 className="red">{message}</h3>}
                {error && <h3 className="red">{error.message}</h3>}
                <Form className="login-form" method="post">
                    <input
                        name="email" 
                        type="email"
                        placeholder="Email Address"
                    />

                    <input
                        name="password" 
                        type="password"
                        placeholder="Password"
                     />  
                     <button disabled = {status === "submitting"}>
                        {status === "submitting"
                            ? "Logging in..."
                            : "Log in"
                        }
                        
                     </button> 
                </Form>
            </div>
  )
}

export default Login