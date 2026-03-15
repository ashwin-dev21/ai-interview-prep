const mongoose = require("mongoose")

const SessionSchema = new mongoose.Schema({
  userId: String,
  role: String,
  experience: String,
  questions: [
    {
      question: String,
      answer: String
    }
  ],
  pinned: [Number]
})

module.exports = mongoose.model("Session", SessionSchema)