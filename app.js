const path = require('path');
const express = require('express')
const app = express()
const port = 3000

const publicPath = path.join(__dirname, '/', 'public');

console.log(publicPath);
app.use(express.static(publicPath));

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'example.html'));
 });
 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

