require("dotenv").config()

const express = require("express")
const cors = require("cors")

const connectDB = require("./config/db")

const authRoutes = require("./routes/auth")
const aiRoutes = require("./routes/ai")
const sessionRoutes = require("./routes/session")

const app = express()
const PORT = process.env.PORT || 5000

connectDB()

app.use(cors())
app.use(express.json())

app.use("/api/auth", authRoutes)
app.use("/api/ai", aiRoutes)
app.use("/api/session", sessionRoutes)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
