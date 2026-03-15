const router = require("express").Router()
const generateQuestions = require("../utils/gemini")
const auth = require("../middleware/authMiddleware")

router.post("/generate", auth, async (req, res) => {

const { role, experience } = req.body

const questions = await generateQuestions(role, experience)

res.json({ questions })

})

module.exports = router