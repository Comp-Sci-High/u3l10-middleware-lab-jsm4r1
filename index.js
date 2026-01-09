// INSTRUCTIONS: Write the code that does the following:

// -0 Set up the server correctly
const express = require('express')
const app = express() 

app.listen(3000, () => {
    console.log("Server is running")
})

// -1 console logs the method and URL for every request
app.use((req, res, next) => {
    console.log(req.method + "/" + req.url)
    next()
})

// -2 sends back "Welcome to the Animal Shelter Network" as an h1 when the client goes to /
app.get('/', (req,res) => {
    res.status(200).send("<h1>Welcome to the Animal Shelter Network<h1>")
})

// -3 sends back the cat object when the client goes to /api/cat
app.get('/api/cat', (req,res) => {
    res.status(200).json(animalShelterData.cats)
})

// -4 sends back the shelters object when the client goes to /api/shelters
app.get('/api/shelters', (req,res) => {
    res.status(200).json(animalShelterData.shelters)
})

// -5 sends back "Go to /api/cat to see cats for adoption and /api/shelters to see shelters in the area" when the client goes to /docs
app.get('/docs', (req,res) => {
    res.status(200).send("<h1>Go to /api/cat to see cats for adoption and /api/shelters to see shelters in the area <h1>")
})

// -6 BLUE & PINK: sends back "A cat you can adopt is " with the name of the first cat when the client goes to /adopt/cat 
//    (Use dot notation & string concatenation)
app.get('/adopt/cat', (req,res) => {
    res.send("<h1>A cat you can adopt is " + animalShelterData.cats[0].name + ".")
})

// -7 sends back a 404 page for all other paths
app.use((req,res,next) => {
    res.status(404).send("404 NOT FOUND")
})

// PINK Only: Add the correct status codes to ALL route handlers

const animalShelterData = {
    cats: [
        { name: "Whiskers", age: 2, shelter: "Happy Tails Shelter" },
        { name: "Mittens", age: 3, shelter: "Cozy Paws Sanctuary" },
        { name: "Shadow", age: 1, shelter: "Happy Tails Shelter" }
    ],
    shelters: [
        { name: "Happy Tails Shelter", location: "123 Main Street, Cityville" },
        { name: "Cozy Paws Sanctuary", location: "456 Oak Avenue, Townsburg" }
    ]
};
