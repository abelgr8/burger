var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var methodOverride = require("method-override");

var app = express();
var routes = require("./controllers/burgers_controller");

var PORT = process.env.PORT || 8080;


app.use(express.static('/public'));

app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(methodOverride("_method"));

app.engine("handlebars", exphbs({
    defaultLayout: "main"
}))

app.set("view engine", "handlebars");

app.use("/", routes )


app.listen(PORT, function () {
    console.log(" App listening on port " + PORT);
});
