const express = require("express")
const request = require("request")

const app = express()

const PORT = process.env.PORT || 5000

app.listen(PORT, () => { console.log("Server is listening on port 5000") })