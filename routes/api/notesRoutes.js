const router = require("express").Router()

const fs = require('fs');
const util = require('util');
const writeToFile = util.promisify(fs.writeFile);
const readFromFile = util.promisify(fs.readFile);
const getNotes = () => {
    return readFromFile("db/db.json", "utf-8").then(rawnotes => [].concat(JSON.parse(rawnotes)))

}
router.get("/", (req, res) => {
    getNotes().then(notes => res.json(notes))
})
router.post("/", (req, res) => {
    getNotes().then(notes => {
        let newNote = {
            title: req.body.title,
            text: req.body.text,
            id: Math.floor(Math.random() * 1000)

        }
        let newNotearray = [...notes, newNote]
        writeToFile("db/db.json", JSON.stringify(newNotearray)).then(() => res.json({
            msg: "ok"
        }))

    })
})
router.delete("/:id", (req, res) => {
    // getNotes().then(oldNotes => {
    //     console.log("text")
    //     console.log(oldNotes)
    //     console.log(req.params.id)
    //     let filteredNotes = oldNotes.filter(note => note.id !== req.params.id)
    //     console.log(filteredNotes)
    // })
    getNotes()
      .then((notes) => notes.filter((note) => note.id != req.params.id))
      .then((filteredNotes) => console.log(filteredNotes));
      

}
)
module.exports = router

// add and delete notes
