const express = require("express")
const app = express()
var cors = require('cors')
const path = require("path") 

app.use(express.static(path.join(__dirname, "static")))

app.use(cors())

app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "static"))
    // res.sendFile(path.join(__dirname, "build", "index.html"));

})

app.listen("5000", () => {
    console.log("on")
})