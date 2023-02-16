const router = require("express").Router()
const apiroutes = require("./api")
const path = require("path")
router.use("/api", apiroutes)

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"))
})
router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"))
})
// router.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "../public/pages/404.html"))
// })
module.exports = router