const express = require('express');
const app = express();

app.get("/",(req, resp)=>{
    resp.send("app is runnning...");
})

app.listen(3000);