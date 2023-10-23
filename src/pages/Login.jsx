import { useLoaderData, Form, useNavigate, redirect } from "react-router-dom"
import { useState} from "react"
import { loginUser } from "../server"

export function Loader( {request} ) {
    return new URL(request.url).searchParams.get("message")
}

export async function action({ request }) {
    const formData = await request.formData()
    const email = formData.get("email")
    const password = formData.get("password")
    
    try {
        const data = await loginUser({ email, password})
        localStorage.setItem("loggedIn", true)
        return redirect("/host")
    }
    catch(error) 
}

const Login = () => {
        const [status, setStatus] = useState("idle")
        const message = useLoaderData()
        const navigate = useNavigate()
      

  return (
            <div className="login-container">
                <h1>Sign in to your account</h1>
                {message && <h3 className="red">{message}</h3>}
                {error && <h3 className="red">{error.message}</h3>}
                <Form className="login-form" method="post" replace>
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