const router = require("express").Router()
const Session = require("../models/Session")
const auth = require("../middleware/authMiddleware")

router.post("/create", auth, async (req, res) => {

const session = await Session.create({
userId: req.user.id,
role: req.body.role,
experience: req.body.experience,
questions: req.body.questions
})

res.json(session)

})

router.get("/", auth, async (req, res) => {

const sessions = await Session.find({ userId: req.user.id })

res.json(sessions)

})

router.put("/pin/:id", auth, async (req, res) => {

const session = await Session.findById(req.params.id)

session.pinned.push(req.body.index)

await session.save()

res.json(session)

})

module.exports = router