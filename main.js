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
// ----------- Local Variables -----------
const port = 9000;      // The port where is going to listen.
const app = express();  // Adding express to app in order to syncronisc each webpage.
const notesList = [];
// ---------------------------------------
// ---------- Adding objects. -----------
let noteTest1 = {title: "My morning routine", description: "This is just a short description.", date: date.getDate()};
let noteTest2 = {title: "Weekend routine", description: "This is just another short description.", date: date.getDate()};
notesList.push(noteTest1);
notesList.push(noteTest2);
// ---------------------------------------
// -------- Modules configuration. ---------
app.use(bodyParser.urlencoded({extended: true}));   // Configuration in order to get data from the forms.
app.use(express.static("public"));  // Configuration in order to call local files inside of the public folder.
app.set('view engine', 'ejs');  // Configuration in order to use EJS in our web application.
// ---------------------------------------
// ------------ GET request --------------
app.get("/", (req, res) => {    // Route of the main application.
    res.render('pages/index', {current_date: date.getDate(), notes: notesList});
});

app.get("/about", (req, res) => {   // About page from the application.
    res.render('pages/about', {current_date: date.getDate()});
});

app.get("/new", (req, res) => {     // New page to create a new object.
    res.render('pages/new', {current_date: date.getDate()});
});

app.get('/notes/:noteID', (req, res) => {       // Show page where render a note base on the ID.
    const id = req.params.noteID;
    const note = notesList[id];
    res.render('pages/show', {current_date: date.getDate(), note: note});
  })
// ---------------------------------------
// ------------ POST request -------------
app.post("/new", (req, res) => {
    const note = {title: req.body.title, description: req.body.description, date: date.getDate()};
    notesList.push(note);
    res.redirect("/");
});
// ---------------------------------------
// ------------ PORT settings ------------
app.listen(process.env.PORT || port, () => {    // It listen in the ports spcified at the beginnig and also, in the port set by the production enviroment.
    console.log(`Listening on port ${port}`);
});
// ---------------------------------------
