import { useState } from "react"

export default function QuestionAccordion({ q }) {

const [open,setOpen] = useState(false)

return (

<div className="border p-4 mb-2 rounded">

<div
className="cursor-pointer font-bold"
onClick={()=>setOpen(!open)}
>
{q.question}
</div>

{open && (
<p className="mt-2 text-gray-600">{q.answer}</p>
)}

</div>

)

}