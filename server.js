const express = require("express");
const { getMPoster800, getMPoster600,getMPoster1000 } = require("./controller")
const posterControl = require("./controller")


const app = express();
// this.http = http.Server(this.app);

// var cors = require("cors");
// app.use(cors());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.json());
var cron = require('node-cron');

// cron.schedule('0 0 * * *', ()=>{
cron.schedule('*/10 * * * * *', ()=>{
    console.log("cron")
    getMPoster1000()
})


const port = 4300;

app.listen(port, function () {
  console.log("Server started at :", port);
});