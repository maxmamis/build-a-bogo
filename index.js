const Bogo = require('./Bogo');
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
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

app.listen(port, () => console.log(`Example app listening on port ${port}!`))