import express from "express"
import cors from "cors"
import router from "./routes/router.js"
const app = express()

const port = 3000


app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.json({
    message:"Api working"
  })
})

app.use("/api",router)

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})