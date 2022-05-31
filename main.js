// ------------- NPM Modules -----------
//      Description: These are the modules required from node
//  in order to run this web application.
const express = require("express"); // Require the EXPRESS module.
const bodyParser = require("body-parser");  // Require the Body Parser module.
const ejs = require("ejs");     // Require the EJS module. 
const { getDate } = require("./javascript/date");
// ---------------------------------------
// --------- Import Local module ----------
const date = require(__dirname + '/javascript/date');
// ---------------------------------------
// ----------- Global Variables -----------
const port = 9000;      // The port where is going to listen.
const app = express();  // Adding express to app in order to syncronisc each webpage.
// ---------------------------------------
// -------- Modules configuration. ---------
app.use(bodyParser.urlencoded({extended: true}));   // Configuration in order to get data from the forms.
app.use(express.static("public"));  // Configuration in order to call local files inside of the public folder.
app.set('view engine', 'ejs');  // Configuration in order to use EJS in our web application.
// ---------------------------------------
// ------------ GET request --------------
app.get("/", (req, res) => {    // Route of the main application.
    res.render('pages/index', {current_date: date.getDate()});
});

app.get("/about", (req, res) => {
    res.render('pages/about', {current_date: date.getDate()});
});

app.get("/new", (req, res) => {
    res.render('pages/new', {current_date: date.getDate()});
});
// ---------------------------------------
// ------------ POST request -------------



// ---------------------------------------
// ------------ PORT settings ------------
app.listen(process.env.PORT || port, () => {    // It listen in the ports spcified at the beginnig and also, in the port set by the production enviroment.
    console.log(`Listening on port ${port}`);
});
// ---------------------------------------

