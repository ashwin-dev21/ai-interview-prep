const router = require("express").Router()
const generateQuestions = require("../utils/gemini")
const auth = require("../middleware/authMiddleware")

router.post("/generate", auth, async (req, res) => {
  try {
    const { role, experience } = req.body
    const questions = await generateQuestions(role, experience)
    res.json({ questions })
  } catch (error) {
    const upstreamMessage = error?.response?.data?.error?.message
    res.status(500).json({
      message: upstreamMessage || error.message || "Failed to generate questions",
    })
  }
})

module.exports = router
