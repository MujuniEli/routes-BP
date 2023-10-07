import { redirect } from "react-router-dom";    

 async function requireAuth() {
    const isLoggedIn = false

    if(!isLoggedIn) {
        throw redirect("/login?message=You must log in first")
    }
}

export default requireAuth