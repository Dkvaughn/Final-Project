const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");
const routes = require("./routes");
// const staticRoutes = Object.keys(require("./routes/staticRoute"));
// var router = express.Router();
const PORT = process.env.PORT || 3000; 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// routes.initialize(app);

require("./routes/htmlRoutes")(app);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use(routes);


// staticRoutes.forEach(function(route){
//   app.get(route, function(req, res){
//    res.sendFile(__dirname + '/static/index.html');
//   });
// });

// app.get("/", function(req,res){
//   res.sendFile(path.join(__dirname, "index.html"));
// });
// routes.initialize(app);

// router.get("/", function(req, res, next){

// })

// app.use(app.router);


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/PleaseworkDB");


app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});