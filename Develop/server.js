//Requirements for App
const express = require("express")
const path = require("path")
const fs = require("fs")

// Calling express
const app = express();

//Defining the PORT
const PORT = process.env.PORT || 4000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

//Webpage Routes
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public/index.html"))
})

app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "public/notes.html"))
})

// API Routes

// Retrieves and Displays Notes from DB
app.get("/api/notes", (req, res) => {
    fs.readFile("./db/db.json", (err, data) => {
        if (err) throw err;
        return res.json(JSON.parse(data))
    })
})

// Allows user to add new notes to DB
// app.post("/api/notes", (req, res) => {
//     let newNote = req.body;

//     fs.appendFileSync("./db/db.json", newNote)

//     return res.json(newNote)
// })

// Deletes notes
app.delete("/api/notes/:id", (req, res) => {
    let oldNote = req.params.id 
    console.log(res)
    let notes = fs.readFileSync("./db/db.json", (err, data) => {
        if (err) throw err;
        let json = JSON.parse(data);
        console.log(data)
        return data
    })
    console.log(notes)
    


})
//Starts Server
app.listen(PORT, () => {
    console.log("Listening on PORT " + PORT)
})