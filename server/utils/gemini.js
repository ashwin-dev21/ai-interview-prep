const axios = require("axios")

async function generateQuestions(role, experience) {

const prompt = `
Generate 5 technical interview questions and answers for a ${role}
developer with ${experience} years experience.
Return JSON like:
[{question:"",answer:""}]
`

const res = await axios.post(
`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${process.env.GEMINI_KEY}`,
{
contents:[{parts:[{text:prompt}]}]
}
)

return res.data.candidates[0].content.parts[0].text
}

module.exports = generateQuestions