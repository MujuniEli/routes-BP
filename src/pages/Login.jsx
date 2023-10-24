import { useLoaderData, Form, useActionData, useNavigation } from "react-router-dom"
// import { loginUser } from "../server"

export function Loader( {request} ) {
    return new URL(request.url).searchParams.get("message")
}



const Login = () => {
        const errorMessage = useActionData()
        const message = useLoaderData()
        const navigation = useNavigation()
      

  return (
            <div className="login-container">
                <h1>Sign in to your account</h1>
                {message && <h3 className="red">{message}</h3>}
                {errorMessage && <h3 className="red">{errorMessage}</h3>}

                <Form 
                    className="login-form" 
                    method="post" 
                    replace
                >
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
                     <button disabled = {navigation.state === "submitting"}>
                        {navigation.state === "submitting"
                            ? "Logging in..."
                            : "Log in"
                        }
                        
                     </button> 
                </Form>
            </div>
  )
}

export default Login