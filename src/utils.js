import { redirect } from "react-router-dom";  
import { loginUser } from "./server"; 

 export async function requireAuth() {
    const isLoggedIn = localStorage.getItem("loggedIn")

    if(!isLoggedIn) {
        throw redirect("/login?message=You must log in first")
    }
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
    catch(err) {
        return err.message
    } 
    
}






