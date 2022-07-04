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

// set port, listen for requests
const PORT = process.env.PORT || 8081;
require("./src/core/router/StudentsRoute")(app);
require("./src/core/router/MaterialsRoute")(app);
require("./src/core/router/LoanRoute")(app);

require("./src/core/router/Login")(app);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

