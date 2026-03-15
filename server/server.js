require("dotenv").config()

const express = require("express")
const cors = require("cors")

const connectDB = require("./config/db")

const authRoutes = require("./routes/auth")
const aiRoutes = require("./routes/ai")
const sessionRoutes = require("./routes/session")

const app = express()

connectDB()

app.use(cors())
app.use(express.json())

app.use("/api/auth", authRoutes)
app.use("/api/ai", aiRoutes)
app.use("/api/session", sessionRoutes)

app.listen(5000, () => console.log("Server running on port 5000"))