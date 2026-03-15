import { Link, useNavigate } from "react-router-dom"

export default function Navbar(){

const navigate = useNavigate()

const logout = ()=>{

localStorage.removeItem("token")
navigate("/")

}

return(

<div className="bg-gray-800 text-white p-4 flex justify-between">

<h1>AI Interview Prep</h1>

<div>

<Link className="mr-4" to="/dashboard">
Dashboard
</Link>

<button onClick={logout}>
Logout
</button>

</div>

</div>

)

}