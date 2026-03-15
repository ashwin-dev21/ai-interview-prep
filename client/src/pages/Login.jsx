import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import api from "../api/api"

export default function Login(){

const [email,setEmail] = useState("")
const [password,setPassword] = useState("")
const navigate = useNavigate()

const handleLogin = async(e)=>{

e.preventDefault()

try{

const res = await api.post("/auth/login",{
email,
password
})

localStorage.setItem("token",res.data.token)

navigate("/dashboard")

}catch(err){

alert("Login failed")

}

}

return(

<div className="min-h-screen flex items-center justify-center">

<form
onSubmit={handleLogin}
className="bg-white p-8 shadow-lg rounded w-96"
>

<h2 className="text-2xl mb-4 font-bold">Login</h2>

<input
type="email"
placeholder="Email"
className="border p-2 w-full mb-3"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>

<input
type="password"
placeholder="Password"
className="border p-2 w-full mb-4"
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>

<button
className="bg-blue-500 text-white w-full py-2"
>
Login
</button>

<p className="mt-4 text-sm">
No account?
<Link className="text-blue-500" to="/register">
 Register
</Link>
</p>

</form>

</div>

)

}