const express = require("express");
const app = express();
const PORT = process.env.PORT || 3030;

app.get('/', function (req, res) {
    res.send('Hello World')
  })

  app.get('/students', function (req, res) {
    var data = [
        {id:1 , name: "Mira"},
        {id:2 , name: "Reina"},
        {id:3 , name: "Tala"},
        {id:4 , name: "Lamar"}
    ]
    res.send(data)
  })

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});