const express = require('express');
require('dotenv').config();
const route = require('./routes/client/index.route');
const app = express();
const port = process.env.PORT;


route(app);
app.use(express.static('public'));//sử dụng file static

app.set('view engine', 'pug');
app.set('views', './views');


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
