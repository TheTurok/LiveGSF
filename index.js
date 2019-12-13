const express = require('express');  // express helps us create and server app!
const app = express();


app.get('/', (req,res) => {  // at main url  -- / receive request
  res.send({hi:'the'});  // result sending to this location of url
});

const PORT = process.env.PORT || 5000

app.listen(PORT);
