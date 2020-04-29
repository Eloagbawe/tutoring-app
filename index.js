const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

const port = 3000;







app.get('/', (req, res) => res.send('<h1>Server is working!</h1>'))




app.listen(port, () => console.log(`Express app listening at http://localhost:${port}`))