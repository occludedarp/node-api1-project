const express = require('express')
const shortid = require('shortid')

const server = express();

let users = [];

server.use(express.json());

server.post("/api/users", (req, res) => {
  const user = req.body
  if (user.hasOwnProperty( "name" && "bio" )){
    user.id = shortid.generate();
    users.push(user)
    res.status(201).json({ user });
  } else if (!users){
    res.status(500).json({ errorMessage: "There was an error while saving the user to the database" });
  } else {
    res.status(400).json({ "errorMessage": "Please provide name and bio for the user." });
  }
})


const PORT = 5000;
server.listen(PORT, () => {
  console.log(`\n ** API on http://localhost:${PORT} **\n `)
})