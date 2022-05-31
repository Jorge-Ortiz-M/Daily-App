// ------------- NPM Modules -----------
//      Description: These are the modules required from node
//  in order to run this web application.
const express = require("express"); // Require the EXPRESS module.
const bodyParser = require("body-parser");  // Require the Body Parser module.
const ejs = require("ejs");     // Require the EJS module. 
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
app.get("/", (req, res) => {    // Route of main application.
    res.render('pages/index');
});
// ---------------------------------------
// ------------ POST request -------------



// ---------------------------------------
// ------------ PORT settings ------------
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
// ---------------------------------------

