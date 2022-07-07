const express = require("express");
const cors = require("cors");
const sessions = require("express-session");
const cookieParser = require("cookie-parser");
const app = express();

var corsOptions = {
    origin: "http://localhost:8080"
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({extended: true}));

// simple route
app.get("/", (req, res) => {
    res.json({message: "Projet scolaire en developpement web"});
});

// creating 24 hours from milliseconds
const oneDay = 1000 * 60 * 60 * 24;
app.use(sessions({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized:true,
    cookie: { maxAge: oneDay },
    resave: false
}));

// parsing the incoming data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//serving public file
app.use(express.static(__dirname));

// cookie parser middleware
app.use(cookieParser());

//username and password
const myusername = "Select AdresseMail from Responsable"
const mypassword = "Select MotDePAsse from Responsable"

// a variable to save a session
var session;

app.get('/',(req,res) => {
    session=req.session;
    if(session.userid){
        res.send("Welcome User <a href='/logout'>click to logout</a>");
    }else
        res.sendFile('components/Login/LoginPage',{root:__dirname})
});

app.post('/authLogin',(req,res) => {
    if(req.body.username === myusername && req.body.password === mypassword){
        session=req.session;
        session.userid=req.body.username;
        console.log(req.session)
        res.send(`Hey there, welcome <a href='/logout'>click to logout</a>`);
    }
    else{
        res.send('Invalid username or password');
    }
})

app.get('/logout',(req,res) => {
    req.session.destroy();
    res.redirect('/');
});

// set port, listen for requests
const PORT = process.env.PORT || 8081;
require("./src/core/router/StudentsRoute")(app);
require("./src/core/router/MaterialsRoute")(app);
require("./src/core/router/LoanRoute")(app);

require("./src/core/router/Login")(app);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

