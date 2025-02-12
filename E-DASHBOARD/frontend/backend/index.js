const express = require("express");
require('./db/config');
const cors = require('cors');
const User = require('./db/User');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());
// Enable CORS for all domains (you can restrict to specific origins if needed)
app.use(cors());

app.post('/register', async (req, resp) => {
    let user = new  User(req.body);
    let result =await user.save();
    resp.send(req.body);
});


app.listen(3000);