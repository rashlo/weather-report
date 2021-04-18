const express = require('express');
const app = express();
let port = process.env.PORT || 5000;

const path = require('path');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');

app.use(favicon(path.join(__dirname,'client', 'public','favicon.ico')));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'client', 'public')));

app.get('*', (req, res) => {                       
  res.sendFile(path.resolve(__dirname, 'client', 'public', 'index.html'));                               
});

app.listen(port, () => console.log(`localhost:${port}`));

