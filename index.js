const express = require('express')
const shortid = require('shortid')

const server = express();

const PORT =  express();
server.listen(PORT, () => {
  console.log(`\n ** API on http://localhost:${PORT} **\n `)
})