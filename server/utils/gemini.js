const axios = require("axios")

function extractJsonArray(text) {
  if (!text || typeof text !== "string") return "[]"

  const fenced = text.match(/```(?:json)?\s*([\s\S]*?)\s*```/i)
  if (fenced?.[1]) return fenced[1].trim()

  return text.trim()
}

async function generateQuestions(role, experience) {
  const apiKey = process.env.GEMINI_API_KEY || process.env.GEMINI_KEY

  if (!apiKey) {
    throw new Error("Missing GEMINI_API_KEY or GEMINI_KEY in server environment")
  }

  const prompt = `
Generate 5 technical interview questions and answers for a ${role}
developer with ${experience} years experience.
Return ONLY valid JSON array in this format:
[{"question":"", "answer":""}]
Do not include markdown fences.
`

  const res = await axios.post(
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent",
    {
      contents: [{ parts: [{ text: prompt }] }],
    },
    {
      headers: {
        "x-goog-api-key": apiKey,
        "Content-Type": "application/json",
      },
    }
  )

  const rawText = res.data?.candidates?.[0]?.content?.parts?.[0]?.text || "[]"
  return extractJsonArray(rawText)
}

module.exports = generateQuestions
