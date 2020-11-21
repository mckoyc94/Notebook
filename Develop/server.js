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

//Webpage Routes
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public/index.html"))
})

app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "public/notes.html"))
})

// API Routes
const notes = require("db/notes.js")

app.get("/api/notes", (req, res) => {
    res.json(notes)
})

//Starts Server
app.listen(PORT, () => {
    console.log("Listening on PORT " + PORT)
})