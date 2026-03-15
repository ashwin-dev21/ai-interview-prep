import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import api from "../api/api"

export default function Register(){

const [name,setName] = useState("")
const [email,setEmail] = useState("")
const [password,setPassword] = useState("")

const navigate = useNavigate()

const handleRegister = async(e)=>{

e.preventDefault()

try{

await api.post("/auth/register",{
name,
email,
password
})

navigate("/")

}catch{

alert("Registration failed")

}

}

return(

<div className="min-h-screen flex items-center justify-center">

<form
onSubmit={handleRegister}
className="bg-white p-8 shadow-lg rounded w-96"
>

<h2 className="text-2xl mb-4 font-bold">Register</h2>

<input
placeholder="Name"
className="border p-2 w-full mb-3"
value={name}
onChange={(e)=>setName(e.target.value)}
/>

<input
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
className="bg-green-500 text-white w-full py-2"
>
Register
</button>

<p className="mt-4 text-sm">
Already have account?
<Link className="text-blue-500" to="/">
 Login
</Link>
</p>

</form>

</div>

)

}