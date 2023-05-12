const express = require('express');
const app = express();

app.use((_req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
  
    next();
  });

app.get('/', (req, res) => {
    res.send('Hello world');
});

const PORT = 3001;

app.listen(PORT, ()=> console.log(`server running at port ${PORT}`));