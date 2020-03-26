const express  = require('express');
const cors = require('cors')
const routes = require('./routes');
const app = express();

app.set("json spaces", 4);
app.use(cors());
app.use(express.json());
app.use(routes);




app.listen(3335);