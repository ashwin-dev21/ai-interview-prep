import { useState } from "react"
import api from "../api/api"
import QuestionAccordion from "../components/QuestionAccordion"

export default function Dashboard() {
  const [role, setRole] = useState("")
  const [experience, setExperience] = useState("")
  const [questions, setQuestions] = useState([])
  const [error, setError] = useState("")

  const generate = async () => {
    setError("")

    try {
      const token = localStorage.getItem("token")

      const res = await api.post(
        "/ai/generate",
        { role, experience },
        { headers: { Authorization: token } }
      )

      const parsed = JSON.parse(res.data.questions)
      setQuestions(Array.isArray(parsed) ? parsed : [])
    } catch (err) {
      const message =
        err?.response?.data?.message ||
        "Failed to generate questions. Please check API key and try again."
      setError(message)
      setQuestions([])
    }
  }

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">AI Interview Prep</h1>

      <input
        className="border p-2 w-full mb-2"
        placeholder="Role"
        onChange={(e) => setRole(e.target.value)}
      />

      <input
        className="border p-2 w-full mb-4"
        placeholder="Experience"
        onChange={(e) => setExperience(e.target.value)}
      />

      <button
        className="bg-blue-500 text-white px-4 py-2 mb-3"
        onClick={generate}
      >
        Generate Questions
      </button>

      {error && <p className="text-red-600 mb-4">{error}</p>}

      {questions.map((q, i) => (
        <QuestionAccordion key={i} q={q} />
      ))}
    </div>
  )
}
