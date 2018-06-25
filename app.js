var express = require("express")
var app = express();
var bodyParser = require("body-parser");

app.set("view engine", "ejs")
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/static', express.static('public'))



app.get("/", function(req, res) {
    res.render("index")
})

//=======================>
//Server Listen
//=======================>
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("js30 has started");
});
