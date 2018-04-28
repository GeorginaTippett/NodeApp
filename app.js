//loads application using Express
//trying out setting up a server etc...

const express = require('express') //requires the express library
const app = express() //new instance of Express
const morgan = require('morgan')//logs everything in terminal

app.use(morgan('combined'))//can use short or combined here to get different info

//specify the route...GET request, call back...
app.get("/", (req, res) => {
  console.log("Responding to root route")
  res.send("Hello from Georgina!")
})


// using the users page to return  JSON object, using a return method below
//this sets up a route called 'users' to process GET requests
app.get("/users", (req, res) => {
  var user1 = {firstName: "Georgina", lastName: "Tippett"}
  var user2 = {firstName: "Princess", lastName: "Loppy"}
  var user3 = {firstName: "Hello", lastName: "World"}
  res.json([user1, user2, user3])

  //first did this to view ../users and to test nodemon is working when i save file
  res.send("Installed Nodemon so this auto updates when I save!!")
})

//setting up a server test which i can ping at port 3003...
app.listen(3003, () => {
  //console.log("Success! :D My test server is up and listening on port 3003...")
})
