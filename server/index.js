const Bogo = require('./Bogo');
const express = require('express')
const app = express()

app.get('/bogo.png', (req, res) => {
  const { bgcolor, textcolor, text } = req.query;
  const bogo = new Bogo(text, bgcolor, textcolor);
  const stream = bogo.generate(100);

  stream.on('data', chunk => {
    res.write(chunk);
  });
   
  stream.on('end', () => {
    res.end();
  });
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}

app.listen(port, () => console.log(`Serving up fresh bogos on port ${port}!`))